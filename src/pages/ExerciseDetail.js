import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import { Box } from '@mui/material'
import Detail from '../component/Detail'
import ExerciseVideo from '../component/ExerciseVideo'
import SimilarExercises from '../component/SimilarExercises'
import { useParams } from 'react-router-dom'

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    const {id} = useParams();
    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetailData);

            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideoData.contents);

            const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleExerciseData);

            const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equipmentExerciseData);
        }

        fetchExerciseData(targetMuscleExercises)
    }, [id])
    console.log(targetMuscleExercises);
    if (!exerciseDetail) return <div>No Data</div>;
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} detailkey="detail" />
            <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} /> 
        </Box>
    )
}

export default ExerciseDetail
