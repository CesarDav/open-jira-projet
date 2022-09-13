import { useState, ChangeEvent, useContext } from 'react';

import { EntriesContext } from '../../context/entries/EntriesContext';
import { Button, Box, TextField } from "@mui/material"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { UIContext } from 'context/ui';


export const NewEntry = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [touched, setTouched] = useState<boolean>(false)
    const { addNewEntry } = useContext(EntriesContext)
    const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if (inputValue.length === 0) return
        addNewEntry(inputValue)
        setIsAddingEntry(false)
        setTouched(false)
        setInputValue('')
    }

    return (
        <Box
            sx={{ marginBottom: 2, paddingX: 2 }}
        >
            {
                isAddingEntry ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder="New Entry"
                            autoFocus
                            multiline
                            label="New entry"
                            helperText={inputValue.length <= 0 && touched && "Add value"}
                            error={inputValue.length <= 0 && touched}
                            value={inputValue}
                            onChange={onTextFieldChanged}
                            onBlur={() => setTouched(true)}
                        />

                        <Box display='flex' justifyContent='space-between'>
                            <Button
                                onClick={() => setIsAddingEntry(false)}
                                variant="text"
                            >
                                Cancelar
                            </Button>

                            <Button
                                onClick={onSave}
                                variant="outlined"
                                color="secondary"
                                endIcon={<SaveOutlinedIcon />}
                            >
                                Save
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Button
                        onClick={() => setIsAddingEntry(true)}
                        startIcon={<AddCircleOutlineOutlinedIcon />}
                        fullWidth
                        variant="outlined"
                    >
                        Add Task
                    </Button>
                )
            }

        </Box>
    )
}
