export const filters = {
    genderList: [
        {
            title: "Мужской",
            id: 1
        },{
            title: "Женский",
            id: 2
    }],
    ageList: [
        {
            title: "18-25",
            id: 1
        }, {
            title: "26-30",
            id: 2
        }, {
            title: "31-35",
            id: 3
        }, {
            title: "36-40",
            id: 4
        }, {
            title: "41-45",
            id: 5
        }, {
            title: "46-50",
            id: 6
        }, {
            title: "51-55",
            id: 7
        }, {
            title: "56+",
            id: 8
    }],
    kindList: [
        {
            title: "Госсектор",
            id: 1
        }, {
            title: "Корпорация",
            id: 2
        }, {
            title: "Фриланс",
            id: 3
        }, {
            title: "Предприниматель",
            id: 4
    }]
}
export const testData = {
    group: {
        percentByStage: [
            {
                'label': 'Установление',
                'data': [100]
            },
            {
                'label': 'Выявление',
                'data': [25]
            },
            {
                'label': 'Предложение',
                'data': [50]
            },
            {
                'label': 'Торг',
                'data': [10]
            }
        ],
        timeByStage: [
            {
                'label': 'Установление',
                'data': [2020]
            },
            {
                'label': 'Выявление',
                'data': [1002]
            },
            {
                'label': 'Предложение',
                'data': [808]
            },
            {
                'label': 'Торг',
                'data': [780]
            }
        ],
        scoreByStage: [
            {
                'label': 'Установление',
                'data': [100]
            },
            {
                'label': 'Выявление',
                'data': [200]
            },
            {
                'label': 'Предложение',
                'data': [80]
            },
            {
                'label': 'Торг',
                'data': [70]
            }
        ],
        repeatByQuestion: [
            {
                'label': 'Вопрос №1',
                'data': [100]
            },
            {
                'label': 'Вопрос №2',
                'data': [200]
            },
            {
                'label': 'Вопрос №2',
                'data': [80]
            },
            {
                'label': 'Вопрос №3',
                'data': [70]
            },
            {
                'label': 'Вопрос №4',
                'data': [70]
            },
            {
                'label': 'Вопрос №5',
                'data': [70]
            },
            {
                'label': 'Вопрос №6',
                'data': [70]
            },
            {
                'label': 'Вопрос №7',
                'data': [70]
            },
            {
                'label': 'Вопрос №8',
                'data': [70]
            },
            {
                'label': 'Вопрос №9',
                'data': [70]
            },
            {
                'label': 'Вопрос №10',
                'data': [70]
            }
        ],
        personList:[
            {
                id: 21,
                name: 'Alex Shatov',
                gender: 'Муж.',
                age: 22,
                kind: 'Госсектор',
                feedback: 208,
                repeat: false,
                status: 1
            },
            {
                id: 121,
                name: 'Philip Harbach',
                gender: 'Муж.',
                age: 60,
                kind: 'Госсектор',
                feedback: 208,
                repeat: true,
                status: 2
            },
            {
                id: 123,
                name: 'Mirko Fisuk',
                gender: 'Муж.',
                age: 28,
                kind: 'Госсектор',
                feedback: 208,
                repeat: true,
                status: 3
            },
            {
                id: 4523,
                name: 'Olga Semklo',
                gender: 'Жен.',
                age: 32,
                kind: 'Госсектор',
                feedback: 208,
                repeat: true,
                status: 1
            },
            {
                id: 567,
                name: 'Burak Long',
                gender: 'Муж.',
                age: 37,
                kind: 'Госсектор',
                feedback: 208,
                repeat: false,
                status: 2
            },
            {
                id: 32412,
                name: 'Philip Harbach',
                gender: 'Муж.',
                age: 42,
                kind: 'Госсектор',
                feedback: 208,
                repeat: true,
                status: 3
            }
        ],

        averageTime: '1,482'
    },
    person: {
        timeByQuestion: [
            {
                'label': 'Вопрос №1',
                'data': [19, 0, 2]
            },
            {
                'label': 'Вопрос №2',
                'data': [0, 3, 2]
            },
            {
                'label': 'Вопрос №2',
                'data': [0, 3, 2]
            },
            {
                'label': 'Вопрос №3',
                'data': [0, 3, 2]
            },
            {
                'label': 'Вопрос №4',
                'data': [0, 3, 2]
            },
            {
                'label': 'Вопрос №5',
                'data': [0, 3, 2]
            },
            {
                'label': 'Вопрос №6',
                'data': [0, 3, 2]
            },
            {
                'label': 'Вопрос №7',
                'data': [0, 3, 2]
            },
            {
                'label': 'Вопрос №8',
                'data': [10, 32, 2]
            },
            {
                'label': 'Вопрос №9',
                'data': [0, 3, 2]
            },
            {
                'label': 'Вопрос №10',
                'data': [7, 3, 0]
            }
        ],
        scoreByQuestion: [
            {
                'label': 'Вопрос №1',
                'data': [1, 1, 4]
            },
            {
                'label': 'Вопрос №2',
                'data': [3, 4, 6]
            },
            {
                'label': 'Вопрос №2',
                'data': [5, 3, 2]
            },
            {
                'label': 'Вопрос №3',
                'data': [6, 2, 0]
            },
            {
                'label': 'Вопрос №4',
                'data': [0, 3, 2]
            },
            {
                'label': 'Вопрос №5',
                'data': [0, 3, 2]
            },
            {
                'label': 'Вопрос №6',
                'data': [5, 3, 2]
            },
            {
                'label': 'Вопрос №7',
                'data': [2, 4, 2]
            },
            {
                'label': 'Вопрос №8',
                'data': [6, 0, 1]
            },
            {
                'label': 'Вопрос №9',
                'data': [0, 3, 2]
            },
            {
                'label': 'Вопрос №10',
                'data': [7, 3, 0]
            }
        ],
        timeByStage: [
            {
                'label': 'Установление',
                'data': [100]
            },
            {
                'label': 'Выявление',
                'data': [25]
            },
            {
                'label': 'Предложение',
                'data': [50]
            },
            {
                'label': 'Торг',
                'data': [10]
            }
        ],
        scoreByStage: [
            {
                'label': 'Установление',
                'data': [2]
            },
            {
                'label': 'Выявление',
                'data': [4]
            },
            {
                'label': 'Предложение',
                'data': [2]
            },
            {
                'label': 'Торг',
                'data': [4]
            }
        ],
        percentByStage: [
            {
                'label': 'Установление',
                'data': [2]
            },
            {
                'label': 'Выявление',
                'data': [4]
            },
            {
                'label': 'Предложение',
                'data': [2]
            },
            {
                'label': 'Торг',
                'data': [4]
            }
        ],

        totalTime: '1,456',
        feedbackTime: '3,4324'
    }
}