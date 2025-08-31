import React from 'react';
import {Line} from "react-chartjs-2";



function Plot(prop) {

    const [hide, setHide] = React.useState(false);
    const handleChange = (e) => {
        setHide(e.target.checked);
    };

    const data = {
        labels: prop.value, // Скрываются настройками ниже
        datasets: [
            {
                label: 'Данные',
                data: prop.value,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    }
    const options = {
        plugins: {
            legend: {
                display: false, // Скрыть легенду
            },
            tooltip: {
                enabled: false, // Отключить всплывающие подсказки
            },
        },
        scales: {
            x: {

                display: false, // Скрыть ось X
            },
            y: {
                min: 0,
                max: 200,
                display: false, // Скрыть ось Y
            },
        },
        elements: {
            point: {
                radius: 0, // Скрыть точки на графике
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    }


    return (
                <Line data={data} options={options} />
    )
        ;
}

export default Plot;