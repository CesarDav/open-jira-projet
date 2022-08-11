import { Button, Box, TextField } from "@mui/material"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


export const NewEntry = () => {
    return (
        <Box
            sx={{ marginBottom: 2, paddingX: 2 }}
        >
            <Button
                startIcon={<AddCircleOutlineOutlinedIcon />}
                fullWidth
                variant="outlined"
            >
                Add Task
            </Button>
            <TextField
                fullWidth
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder="New Entry"
                autoFocus
                multiline
                label="New entry"
                helperText="Add value"
            />

            <Box display='flex' justifyContent='space-between'>
                <Button
                    variant="text"
                >
                    Cancelar
                </Button>

                <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<SaveOutlinedIcon />}
                >
                    Save
                </Button>
            </Box>
        </Box>
    )
}
