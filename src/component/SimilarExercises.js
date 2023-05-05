import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    // const {bodyPart, equipment, gifUrl, id, name, target} = targetMuscleExercises;
    console.log(targetMuscleExercises);
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
            <Typography variant="h3" mb={5} mt={5}>
                Exercise that target the same muscle group
            </Typography>
            <Stack direction="row" sx={{ py: 5, px: 2, position: 'relative' }}>
                {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
                
            </Stack>

            <Typography variant="h3" mb={5} mt={5}>
                Exercise that target the same equipment group
            </Typography>
            <Stack direction="row" sx={{py: 5, px: 2, position: 'relative'}}>
                {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    )
}

export default SimilarExercises
