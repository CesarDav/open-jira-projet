import { ChangeEvent, useMemo, useState, FC, useContext } from 'react';

import { GetServerSideProps } from 'next';
import { capitalize, Grid, CardHeader, CardContent, TextField, CardActions, Button, FormControl, Card, FormLabel, RadioGroup, FormControlLabel, Radio, IconButton } from '@mui/material';
import { useSnackbar } from 'notistack'

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Layouts } from 'components/layouts';
import { Entry, EntryStatus } from 'interfaces';
import { dbEntries } from 'database';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { dateFunction } from 'utils';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished']


interface Props {
    entry: Entry
}


export const EntryPage: FC<Props> = ({ entry }) => {
    const [inputValue, setInputValue] = useState<string>(entry.description)
    const [status, setStatus] = useState<EntryStatus>(entry.status)
    const [touched, setTouched] = useState<boolean>(false);
    const { updateEntry } = useContext(EntriesContext);

    const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

    const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    };

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus)

    }

    const onSave = () => {
        if (inputValue.trim().length === 0) return;

        const updatedEntry: Entry = {
            ...entry,
            status,
            description: inputValue
        }

        updateEntry(updatedEntry, true)
    }

    return (
        <Layouts title={inputValue.substring(0, 20) + '...'}>
            <Grid
                container
                justifyContent={'center'}
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title={`Entry:`}
                            subheader={`Create: ${dateFunction.getFormatDistanceToNow(entry.createdAT)}`}

                        />
                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder='New entry'
                                autoFocus
                                multiline
                                label='New Entry'
                                value={inputValue}
                                onChange={onInputValueChanged}
                                onBlur={() => setTouched(true)}
                                helperText={isNotValid && 'Enter a value '}
                                error={isNotValid}

                            />
                            <FormControl>
                                <FormLabel>Status:</FormLabel>
                                <RadioGroup
                                    row
                                    value={status}
                                    onChange={onStatusChange}
                                >
                                    {
                                        validStatus.map((option) => (
                                            <FormControlLabel
                                                key={option}
                                                value={option}
                                                control={<Radio />}
                                                label={capitalize(option)}
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CardContent>

                        <CardActions>
                            <Button

                                startIcon={<SaveOutlinedIcon />}
                                variant='contained'
                                fullWidth
                                onClick={onSave}
                                disabled={inputValue.length <= 0}

                            >
                                Save
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
            <IconButton
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    backgroundColor: 'error.dark'

                }}
            >
                <DeleteOutlinedIcon />
            </IconButton>
        </Layouts>
    )
}



// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params as { id: string };

    const entry = await dbEntries.getEntryById(id)

    console.log(entry)

    if (!entry) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {
            entry
        }
    }
}

export default EntryPage
