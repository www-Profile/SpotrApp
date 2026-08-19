// ===================ОСНОВНЫЕ ДАННЫЕ ===================
const exercisesData = {
    // ===================СИЛОВЫЕ ===================
    'Силовые': {
        'Руки': {
            '1 LVL': [
                { name: 'Отжимания от стены', category: 'Руки', reps: '12', sets: '3', icon: 'bodybuilding' },
                { name: 'Сгибание рук с резинкой', category: 'Руки', reps: '15', sets: '3', icon: 'bodybuilding' },
                { name: 'Разгибание рук с резинкой', category: 'Руки', reps: '15', sets: '3', icon: 'bodybuilding' },
                { name: 'Планка на вытянутых руках', category: 'Руки', reps: '20 сек', sets: '3', icon: 'bodybuilding' },
                { name: 'Отжимания от коленей', category: 'Грудь', reps: '10', sets: '3', icon: 'breast' }
            ],
            '2 LVL': [
                { name: 'Отжимания от пола узким хватом', category: 'Руки', reps: '10', sets: '4', icon: 'bodybuilding' },
                { name: 'Отжимания от пола широким хватом', category: 'Грудь', reps: '10', sets: '4', icon: 'breast' },
                { name: 'Алмазные отжимания', category: 'Руки', reps: '8', sets: '4', icon: 'bodybuilding' },
                { name: 'Сгибание рук с гантелями (бицепс)', category: 'Руки', reps: '12', sets: '4', icon: 'bodybuilding' },
                { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '12', sets: '4', icon: 'bodybuilding' },
                { name: 'Обратные отжимания от стула', category: 'Руки', reps: '10', sets: '4', icon: 'bodybuilding' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '30 сек', sets: '4', icon: 'press' }
            ],
            '3 LVL': [
                { name: 'Отжимания на одной руке на правую руку', category: 'Руки', reps: '5', sets: '4', icon: 'bodybuilding' },
                { name: 'Отжимания на одной руке на левую руку', category: 'Руки', reps: '5', sets: '4', icon: 'bodybuilding' },
                { name: 'Отжимания с хлопком', category: 'Грудь', reps: '8', sets: '4', icon: 'breast' },
                { name: 'Отжимания с узкой постановкой рук', category: 'Руки', reps: '12', sets: '4', icon: 'bodybuilding' },
                { name: 'Сгибание рук с гантелями (бицепс)', category: 'Руки', reps: '15', sets: '4', icon: 'bodybuilding' },
                { name: 'Молотковые сгибания', category: 'Руки', reps: '12', sets: '4', icon: 'bodybuilding' },
                { name: 'Французский жим с гантелью стоя', category: 'Руки', reps: '12', sets: '4', icon: 'bodybuilding' },
                { name: 'Обратные отжимания от стула с весом', category: 'Руки', reps: '12', sets: '4', icon: 'bodybuilding' },
                { name: 'Планка на одной руке на правую руку', category: 'Руки', reps: '30 сек', sets: '4', icon: 'bodybuilding' },
                { name: 'Планка на одной руке на левую руку', category: 'Руки', reps: '30 сек', sets: '4', icon: 'bodybuilding' }
            ]
        },
        'Плечи': {
            '1 LVL': [
                { name: 'Разведение рук с резинкой в стороны', category: 'Плечи', reps: '15', sets: '3', icon: 'shoulder' },
                { name: 'Подъем рук вперед с резинкой', category: 'Плечи', reps: '15', sets: '3', icon: 'shoulder' },
                { name: 'Жим гантелей сидя', category: 'Плечи', reps: '12', sets: '3', icon: 'shoulder' },
                { name: 'Разведение гантелей в стороны стоя', category: 'Плечи', reps: '12', sets: '3', icon: 'shoulder' },
                { name: 'Тяга к подбородку с резинкой', category: 'Плечи', reps: '15', sets: '3', icon: 'shoulder' }
            ],
            '2 LVL': [
                { name: 'Жим гантелей сидя', category: 'Плечи', reps: '12', sets: '4', icon: 'shoulder' },
                { name: 'Разведение гантелей в стороны стоя', category: 'Плечи', reps: '12', sets: '4', icon: 'shoulder' },
                { name: 'Тяга к подбородку с гантелью', category: 'Плечи', reps: '12', sets: '4', icon: 'shoulder' },
                { name: 'Подъем рук вперед с гантелями', category: 'Плечи', reps: '12', sets: '4', icon: 'shoulder' },
                { name: 'Разведение гантелей в наклоне', category: 'Плечи', reps: '12', sets: '4', icon: 'shoulder' },
                { name: 'Жим Арнольда', category: 'Плечи', reps: '10', sets: '4', icon: 'shoulder' }
            ],
            '3 LVL': [
                { name: 'Жим гантелей сидя', category: 'Плечи', reps: '12', sets: '4', icon: 'shoulder' },
                { name: 'Разведение гантелей в стороны стоя', category: 'Плечи', reps: '15', sets: '4', icon: 'shoulder' },
                { name: 'Тяга к подбородку с гантелью', category: 'Плечи', reps: '12', sets: '4', icon: 'shoulder' },
                { name: 'Подъем рук вперед с гантелями', category: 'Плечи', reps: '15', sets: '4', icon: 'shoulder' },
                { name: 'Разведение гантелей в наклоне', category: 'Плечи', reps: '15', sets: '4', icon: 'shoulder' },
                { name: 'Жим Арнольда', category: 'Плечи', reps: '12', sets: '4', icon: 'shoulder' },
                { name: 'Отжимания в стойке у стены', category: 'Плечи', reps: '8', sets: '4', icon: 'shoulder' },
                { name: 'Махи гантелями перед собой', category: 'Плечи', reps: '12', sets: '4', icon: 'shoulder' }
            ]
        },
        'Пресс': {
            '1 LVL': [
                { name: 'Скручивания лёжа', category: 'Пресс', reps: '15', sets: '3', icon: 'press' },
                { name: 'Подъем ног лёжа', category: 'Пресс', reps: '12', sets: '3', icon: 'press' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '3', icon: 'press' },
                { name: 'Боковая планка на коленях на правую сторону', category: 'Пресс', reps: '15 сек', sets: '3', icon: 'press' },
                { name: 'Боковая планка на коленях на левую сторону', category: 'Пресс', reps: '15 сек', sets: '3', icon: 'press' },
                { name: 'Лодочка', category: 'Спина', reps: '12', sets: '3', icon: 'back' },
                { name: 'Вакуум живота стоя', category: 'Пресс', reps: '10 сек', sets: '3', icon: 'press' }
            ],
            '2 LVL': [
                { name: 'Скручивания с вытянутыми руками', category: 'Пресс', reps: '20', sets: '4', icon: 'press' },
                { name: 'Подъем ног в висе (на турнике)', category: 'Пресс', reps: '12', sets: '4', icon: 'press' },
                { name: 'Ножницы ногами лёжа', category: 'Пресс', reps: '25', sets: '4', icon: 'press' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '40 сек', sets: '4', icon: 'press' },
                { name: 'Боковая планка на правую сторону', category: 'Пресс', reps: '25 сек', sets: '4', icon: 'press' },
                { name: 'Боковая планка на левую сторону', category: 'Пресс', reps: '25 сек', sets: '4', icon: 'press' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '15', sets: '4', icon: 'back' },
                { name: 'Твист сидя', category: 'Пресс', reps: '20', sets: '4', icon: 'press' },
                { name: 'Велосипед лёжа', category: 'Пресс', reps: '20', sets: '4', icon: 'press' }
            ],
            '3 LVL': [
                { name: 'Скручивания с весом', category: 'Пресс', reps: '25', sets: '4', icon: 'press' },
                { name: 'Подъем ног в висе (на турнике)', category: 'Пресс', reps: '15', sets: '4', icon: 'press' },
                { name: 'Ножницы ногами лёжа', category: 'Пресс', reps: '30', sets: '4', icon: 'press' },
                { name: 'Планка на локтях с подъемом ног', category: 'Пресс', reps: '45 сек', sets: '4', icon: 'press' },
                { name: 'Боковая планка с подъемом ног на правую сторону', category: 'Пресс', reps: '30 сек', sets: '4', icon: 'press' },
                { name: 'Боковая планка с подъемом ног на левую сторону', category: 'Пресс', reps: '30 сек', sets: '4', icon: 'press' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '20', sets: '4', icon: 'back' },
                { name: 'Твист сидя с весом', category: 'Пресс', reps: '25', sets: '4', icon: 'press' },
                { name: 'Подъем ног лёжа под углом 45°', category: 'Пресс', reps: '15', sets: '4', icon: 'press' },
                { name: 'Планка на руках с касанием плеч', category: 'Пресс', reps: '16', sets: '4', icon: 'press' }
            ]
        },
        'Грудь': {
            '1 LVL': [
                { name: 'Отжимания от коленей', category: 'Грудь', reps: '12', sets: '3', icon: 'breast' },
                { name: 'Отжимания от стены', category: 'Грудь', reps: '15', sets: '3', icon: 'breast' },
                { name: 'Разводка рук с резинкой', category: 'Грудь', reps: '15', sets: '3', icon: 'breast' },
                { name: 'Планка на вытянутых руках', category: 'Руки', reps: '20 сек', sets: '3', icon: 'bodybuilding' },
                { name: 'Отжимания с упором спереди', category: 'Грудь', reps: '10', sets: '3', icon: 'breast' }
            ],
            '2 LVL': [
                { name: 'Отжимания от пола', category: 'Грудь', reps: '15', sets: '4', icon: 'breast' },
                { name: 'Широкие отжимания', category: 'Грудь', reps: '12', sets: '4', icon: 'breast' },
                { name: 'Отжимания с узкой постановкой рук', category: 'Руки', reps: '12', sets: '4', icon: 'bodybuilding' },
                { name: 'Отжимания с ногами на возвышении', category: 'Грудь', reps: '12', sets: '4', icon: 'breast' },
                { name: 'Разводка рук с гантелями лёжа', category: 'Грудь', reps: '12', sets: '4', icon: 'breast' },
                { name: 'Планка с переходом', category: 'Пресс', reps: '30 сек', sets: '4', icon: 'press' },
                { name: 'Жим гантелей лёжа', category: 'Грудь', reps: '12', sets: '4', icon: 'breast' }
            ],
            '3 LVL': [
                { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '4', icon: 'breast' },
                { name: 'Отжимания на одной руке на правую руку', category: 'Грудь', reps: '6', sets: '4', icon: 'breast' },
                { name: 'Отжимания на одной руке на левую руку', category: 'Грудь', reps: '6', sets: '4', icon: 'breast' },
                { name: 'Отжимания с ногами на возвышении', category: 'Грудь', reps: '15', sets: '4', icon: 'breast' },
                { name: 'Отжимания в алмаз', category: 'Руки', reps: '12', sets: '4', icon: 'bodybuilding' },
                { name: 'Жим гантелей лёжа', category: 'Грудь', reps: '12', sets: '4', icon: 'breast' },
                { name: 'Разводка гантелей лёжа', category: 'Грудь', reps: '15', sets: '4', icon: 'breast' },
                { name: 'Отжимания с паузой внизу', category: 'Грудь', reps: '12', sets: '4', icon: 'breast' },
                { name: 'Планка на одной руке на правую руку', category: 'Руки', reps: '30 сек', sets: '4', icon: 'bodybuilding' },
                { name: 'Планка на одной руке на левую руку', category: 'Руки', reps: '30 сек', sets: '4', icon: 'bodybuilding' },
                { name: 'Жим гантелей на наклонной скамье', category: 'Грудь', reps: '10', sets: '4', icon: 'breast' }
            ]
        },
        'Спина': {
            '1 LVL': [
                { name: 'Тяга резинки к груди', category: 'Спина', reps: '15', sets: '3', icon: 'back' },
                { name: 'Гиперэкстензия лёжа', category: 'Спина', reps: '15', sets: '3', icon: 'back' },
                { name: 'Лодочка', category: 'Спина', reps: '12', sets: '3', icon: 'back' },
                { name: 'Тяга резинки к поясу', category: 'Спина', reps: '15', sets: '3', icon: 'back' },
                { name: 'Планка на вытянутых руках', category: 'Руки', reps: '20 сек', sets: '3', icon: 'bodybuilding' },
                { name: 'Тяга резинки над головой', category: 'Спина', reps: '12', sets: '3', icon: 'back' }
            ],
            '2 LVL': [
                { name: 'Подтягивания (с резинкой)', category: 'Спина', reps: '10', sets: '4', icon: 'back' },
                { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '4', icon: 'back' },
                { name: 'Гиперэкстензия', category: 'Спина', reps: '20', sets: '4', icon: 'back' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '15', sets: '4', icon: 'back' },
                { name: 'Тяга резинки к груди', category: 'Спина', reps: '15', sets: '4', icon: 'back' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '30 сек', sets: '4', icon: 'press' },
                { name: 'Тяга гантели в наклоне двумя руками', category: 'Спина', reps: '12', sets: '4', icon: 'back' }
            ],
            '3 LVL': [
                { name: 'Подтягивания', category: 'Спина', reps: '12', sets: '4', icon: 'back' },
                { name: 'Тяга гантели к поясу', category: 'Спина', reps: '15', sets: '4', icon: 'back' },
                { name: 'Гиперэкстензия с весом', category: 'Спина', reps: '20', sets: '4', icon: 'back' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '15', sets: '4', icon: 'back' },
                { name: 'Тяга резинки к груди', category: 'Спина', reps: '20', sets: '4', icon: 'back' },
                { name: 'Планка на локтях с подъемом рук', category: 'Пресс', reps: '40 сек', sets: '4', icon: 'press' },
                { name: 'Подтягивания широким хватом', category: 'Спина', reps: '10', sets: '4', icon: 'back' },
                { name: 'Тяга гантели к груди', category: 'Спина', reps: '12', sets: '4', icon: 'back' },
                { name: 'Тяга штанги в наклоне (с гантелями)', category: 'Спина', reps: '12', sets: '4', icon: 'back' }
            ]
        },
        'Ноги': {
            '1 LVL': [
                { name: 'Приседания без веса', category: 'Ноги', reps: '20', sets: '3', icon: 'legs' },
                { name: 'Выпады на месте на правую ногу', category: 'Ноги', reps: '12', sets: '3', icon: 'legs' },
                { name: 'Выпады на месте на левую ногу', category: 'Ноги', reps: '12', sets: '3', icon: 'legs' },
                { name: 'Подъем на носки стоя', category: 'Ноги', reps: '20', sets: '3', icon: 'legs' },
                { name: 'Ягодичный мостик', category: 'Ягодицы', reps: '20', sets: '3', icon: 'legs' },
                { name: 'Приседания у стены', category: 'Ноги', reps: '30 сек', sets: '3', icon: 'legs' },
                { name: 'Махи ногой назад стоя на правую ногу', category: 'Ягодицы', reps: '15', sets: '3', icon: 'legs' },
                { name: 'Махи ногой назад стоя на левую ногу', category: 'Ягодицы', reps: '15', sets: '3', icon: 'legs' }
            ],
            '2 LVL': [
                { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
                { name: 'Выпады вперед с гантелями на правую ногу', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' },
                { name: 'Выпады вперед с гантелями на левую ногу', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' },
                { name: 'Подъем на носки с гантелями', category: 'Ноги', reps: '20', sets: '4', icon: 'legs' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '20', sets: '4', icon: 'legs' },
                { name: 'Приседания с паузой внизу', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' },
                { name: 'Выпады назад с гантелями на правую ногу', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' },
                { name: 'Выпады назад с гантелями на левую ногу', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' }
            ],
            '3 LVL': [
                { name: 'Приседания с гантелями (глубокие)', category: 'Ноги', reps: '20', sets: '4', icon: 'legs' },
                { name: 'Выпады вперед с гантелями на правую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
                { name: 'Выпады вперед с гантелями на левую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
                { name: 'Румынская тяга с гантелями', category: 'Ягодицы', reps: '15', sets: '4', icon: 'legs' },
                { name: 'Подъем на носки с гантелями', category: 'Ноги', reps: '25', sets: '4', icon: 'legs' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '20', sets: '4', icon: 'legs' },
                { name: 'Приседания с паузой внизу', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
                { name: 'Выпады в стороны на правую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
                { name: 'Выпады в стороны на левую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
                { name: 'Приседания плие с гантелью', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' }
            ]
        },
        'Всё тело': {
            '1 LVL': [
                { name: 'Приседания без веса', category: 'Ноги', reps: '15', sets: '3', icon: 'legs' },
                { name: 'Отжимания от коленей', category: 'Грудь', reps: '12', sets: '3', icon: 'breast' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '3', icon: 'press' },
                { name: 'Выпады на месте на правую ногу', category: 'Ноги', reps: '10', sets: '3', icon: 'legs' },
                { name: 'Выпады на месте на левую ногу', category: 'Ноги', reps: '10', sets: '3', icon: 'legs' },
                { name: 'Тяга резинки к груди', category: 'Спина', reps: '15', sets: '3', icon: 'back' },
                { name: 'Скручивания лёжа', category: 'Пресс', reps: '15', sets: '3', icon: 'press' }
            ],
            '2 LVL': [
                { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
                { name: 'Отжимания от пола', category: 'Грудь', reps: '12', sets: '4', icon: 'breast' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '30 сек', sets: '4', icon: 'press' },
                { name: 'Выпады вперед с гантелями на правую ногу', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' },
                { name: 'Выпады вперед с гантелями на левую ногу', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' },
                { name: 'Тяга гантели к поясу', category: 'Спина', reps: '12', sets: '4', icon: 'back' },
                { name: 'Скручивания лёжа', category: 'Пресс', reps: '20', sets: '4', icon: 'press' },
                { name: 'Подъем на носки с гантелями', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' }
            ],
            '3 LVL': [
                { name: 'Приседания с гантелями (глубокие)', category: 'Ноги', reps: '20', sets: '4', icon: 'legs' },
                { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '4', icon: 'breast' },
                { name: 'Планка с подъемом ног', category: 'Пресс', reps: '40 сек', sets: '4', icon: 'press' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
                { name: 'Подтягивания', category: 'Спина', reps: '10', sets: '4', icon: 'back' },
                { name: 'Скручивания с весом', category: 'Пресс', reps: '20', sets: '4', icon: 'press' },
                { name: 'Бёрпи', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' },
                { name: 'Тяга гантели к груди', category: 'Спина', reps: '12', sets: '4', icon: 'back' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '15', sets: '4', icon: 'legs' }
            ]
        }
    },
    // ===================ФИТНЕС ===================
    'Фитнес': {
'Зарядка': {
    '1 LVL': [
        { name: 'Наклоны головы', category: 'Пресс', reps: '10', sets: '3', icon: 'press' },
        { name: 'Вращение плечами', category: 'Плечи', reps: '10', sets: '3', icon: 'shoulder' },
        { name: 'Наклоны туловища', category: 'Спина', reps: '12', sets: '3', icon: 'back' },
        { name: 'Приседания', category: 'Ноги', reps: '15', sets: '3', icon: 'legs' },
        { name: 'Махи ногами', category: 'Ноги', reps: '12', sets: '3', icon: 'legs' },
        { name: 'Круговые движения тазом', category: 'Ягодицы', reps: '10', sets: '3', icon: 'legs' },
        { name: 'Потягивание вверх', category: 'Спина', reps: '10', sets: '3', icon: 'back' }
    ],
    '2 LVL': [
        { name: 'Наклоны головы с сопротивлением', category: 'Пресс', reps: '12', sets: '4', icon: 'press' },
        { name: 'Вращение плечами с гантелями', category: 'Плечи', reps: '12', sets: '4', icon: 'shoulder' },
        { name: 'Наклоны туловища с весом', category: 'Спина', reps: '12', sets: '4', icon: 'back' },
        { name: 'Приседания с гантелями', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
        { name: 'Махи ногами с утяжелением', category: 'Ноги', reps: '15', sets: '4', icon: 'legs' },
        { name: 'Планка', category: 'Пресс', reps: '30 сек', sets: '4', icon: 'press' },
        { name: 'Выпады на месте на правую ногу', category: 'Ноги', reps: '10', sets: '4', icon: 'legs' },
        { name: 'Выпады на месте на левую ногу', category: 'Ноги', reps: '10', sets: '4', icon: 'legs' },
        { name: 'Вращение корпусом с гантелью', category: 'Пресс', reps: '12', sets: '4', icon: 'press' }
    ],
    '3 LVL': [
        { name: 'Наклоны головы с отягощением', category: 'Пресс', reps: '15', sets: '4', icon: 'press' },
        { name: 'Вращение плечами с гантелями', category: 'Плечи', reps: '15', sets: '4', icon: 'shoulder' },
        { name: 'Наклоны туловища с весом', category: 'Спина', reps: '15', sets: '4', icon: 'back' },
        { name: 'Приседания с гантелями глубокие', category: 'Ноги', reps: '20', sets: '4', icon: 'legs' },
        { name: 'Махи ногами с утяжелением', category: 'Ноги', reps: '20', sets: '4', icon: 'legs' },
        { name: 'Планка с подъемом рук', category: 'Пресс', reps: '40 сек', sets: '4', icon: 'press' },
        { name: 'Бёрпи', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' },
        { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' },
        { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '12', sets: '4', icon: 'legs' },
        { name: 'Твист корпуса с гантелью', category: 'Пресс', reps: '15', sets: '4', icon: 'press' }
    ]
},
        'Кардио': {
            '1 LVL': [
                { name: 'Бег на месте', category: 'Ноги', reps: '30 сек', sets: '3', icon: 'cardio' },
                { name: 'Прыжки на месте', category: 'Ноги', reps: '20', sets: '3', icon: 'cardio' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '15', sets: '3', icon: 'cardio' },
                { name: 'Бёрпи (упрощённые)', category: 'Ноги', reps: '8', sets: '3', icon: 'cardio' },
                { name: 'Ходьба с высоким подниманием колен', category: 'Ноги', reps: '20 сек', sets: '3', icon: 'cardio' },
                { name: 'Прыжки со сменой ног', category: 'Ноги', reps: '15', sets: '3', icon: 'cardio' }
            ],
            '2 LVL': [
                { name: 'Бег на месте', category: 'Ноги', reps: '45 сек', sets: '4', icon: 'cardio' },
                { name: 'Прыжки на месте', category: 'Ноги', reps: '30', sets: '4', icon: 'cardio' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '25', sets: '4', icon: 'cardio' },
                { name: 'Бёрпи', category: 'Ноги', reps: '12', sets: '4', icon: 'cardio' },
                { name: 'Скакалка (без скакалки)', category: 'Ноги', reps: '30 сек', sets: '4', icon: 'cardio' },
                { name: 'Горные лыжи', category: 'Ноги', reps: '20', sets: '4', icon: 'cardio' },
                { name: 'Прыжки ноги вместе-врозь', category: 'Ноги', reps: '20', sets: '4', icon: 'cardio' }
            ],
            '3 LVL': [
                { name: 'Бег на месте', category: 'Ноги', reps: '60 сек', sets: '5', icon: 'cardio' },
                { name: 'Прыжки на месте', category: 'Ноги', reps: '35', sets: '5', icon: 'cardio' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '30', sets: '5', icon: 'cardio' },
                { name: 'Бёрпи с отжиманием', category: 'Ноги', reps: '15', sets: '5', icon: 'cardio' },
                { name: 'Скакалка (быстрая)', category: 'Ноги', reps: '45 сек', sets: '5', icon: 'cardio' },
                { name: 'Горные лыжи', category: 'Ноги', reps: '25', sets: '5', icon: 'cardio' },
                { name: 'Прыжки из приседа', category: 'Ноги', reps: '20', sets: '5', icon: 'cardio' },
                { name: 'Берпи с прыжком вверх', category: 'Ноги', reps: '12', sets: '5', icon: 'cardio' }
            ]
        },
        'Пилатес': {
            '1 LVL': [
                { name: 'Сотня (дыхание + руки)', category: 'Пресс', reps: '10', sets: '3', icon: 'Pilates' },
                { name: 'Скручивание с подъемом ног', category: 'Пресс', reps: '12', sets: '3', icon: 'Pilates' },
                { name: 'Подъем таза лёжа', category: 'Ягодицы', reps: '15', sets: '3', icon: 'Pilates' },
                { name: 'Ножницы ногами', category: 'Ноги', reps: '15', sets: '3', icon: 'Pilates' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '3', icon: 'Pilates' },
                { name: 'Боковые наклоны сидя', category: 'Пресс', reps: '10', sets: '3', icon: 'Pilates' },
                { name: 'Растяжка позвоночника (кошка)', category: 'Спина', reps: '10', sets: '3', icon: 'Pilates' }
            ],
            '2 LVL': [
                { name: 'Сотня с вытянутыми ногами', category: 'Пресс', reps: '15', sets: '4', icon: 'Pilates' },
                { name: 'Скручивание с подъемом ног', category: 'Пресс', reps: '15', sets: '4', icon: 'Pilates' },
                { name: 'Подъем таза на правую ногу', category: 'Ягодицы', reps: '12', sets: '4', icon: 'Pilates' },
                { name: 'Подъем таза на левую ногу', category: 'Ягодицы', reps: '12', sets: '4', icon: 'Pilates' },
                { name: 'Ножницы ногами', category: 'Ноги', reps: '20', sets: '4', icon: 'Pilates' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '35 сек', sets: '4', icon: 'Pilates' },
                { name: 'Боковая планка на правую сторону', category: 'Пресс', reps: '20 сек', sets: '4', icon: 'Pilates' },
                { name: 'Боковая планка на левую сторону', category: 'Пресс', reps: '20 сек', sets: '4', icon: 'Pilates' },
                { name: 'Растяжка спины (скручивание)', category: 'Спина', reps: '15', sets: '4', icon: 'Pilates' },
                { name: 'Мостик с подъемом ноги на правую ногу', category: 'Ягодицы', reps: '12', sets: '4', icon: 'Pilates' },
                { name: 'Мостик с подъемом ноги на левую ногу', category: 'Ягодицы', reps: '12', sets: '4', icon: 'Pilates' }
            ],
            '3 LVL': [
                { name: 'Сотня с отягощением', category: 'Пресс', reps: '20', sets: '4', icon: 'Pilates' },
                { name: 'Скручивание с подъемом ног и рук', category: 'Пресс', reps: '20', sets: '4', icon: 'Pilates' },
                { name: 'Подъем таза с гантелью', category: 'Ягодицы', reps: '15', sets: '4', icon: 'Pilates' },
                { name: 'Ножницы ногами с утяжелением', category: 'Ноги', reps: '25', sets: '4', icon: 'Pilates' },
                { name: 'Планка с подъемом ноги на правую ногу', category: 'Пресс', reps: '40 сек', sets: '4', icon: 'Pilates' },
                { name: 'Планка с подъемом ноги на левую ногу', category: 'Пресс', reps: '40 сек', sets: '4', icon: 'Pilates' },
                { name: 'Боковая планка с подъемом ноги на правую сторону', category: 'Пресс', reps: '25 сек', sets: '4', icon: 'Pilates' },
                { name: 'Боковая планка с подъемом ноги на левую сторону', category: 'Пресс', reps: '25 сек', sets: '4', icon: 'Pilates' },
                { name: 'Лодочка с задержкой', category: 'Спина', reps: '20', sets: '4', icon: 'Pilates' },
                { name: 'Растяжка в позе голубя', category: 'Ягодицы', reps: '20 сек', sets: '4', icon: 'Pilates' },
                { name: 'Стойка на лопатках', category: 'Спина', reps: '20 сек', sets: '4', icon: 'Pilates' }
            ]
        },
        'Растяжка': {
            '1 LVL': [
                { name: 'Наклоны к ногам сидя', category: 'Спина', reps: '25 сек', sets: '3', icon: 'stretching' },
                { name: 'Растяжка шеи', category: 'Плечи', reps: '15 сек', sets: '3', icon: 'stretching' },
                { name: 'Растяжка рук за спиной', category: 'Руки', reps: '20 сек', sets: '3', icon: 'stretching' },
                { name: 'Наклоны в стороны', category: 'Спина', reps: '15 сек', sets: '3', icon: 'stretching' },
                { name: 'Растяжка спины (кошка-корова)', category: 'Спина', reps: '20 сек', sets: '3', icon: 'stretching' },
                { name: 'Ягодичный мостик (статический)', category: 'Ягодицы', reps: '20 сек', sets: '3', icon: 'stretching' },
                { name: 'Растяжка трицепса', category: 'Руки', reps: '15 сек', sets: '3', icon: 'stretching' }
            ],
            '2 LVL': [
                { name: 'Глубокий наклон к ногам', category: 'Спина', reps: '30 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка шеи с руками', category: 'Плечи', reps: '20 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка плеч (замок)', category: 'Плечи', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Боковые наклоны с руками', category: 'Спина', reps: '20 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка спины (скручивание)', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка ног (шпагат)', category: 'Ноги', reps: '20 сек', sets: '4', icon: 'stretching' },
                { name: 'Поза голубя', category: 'Ягодицы', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка задней поверхности бедра', category: 'Ноги', reps: '20 сек', sets: '4', icon: 'stretching' }
            ],
            '3 LVL': [
                { name: 'Глубокий наклон с захватом ног', category: 'Спина', reps: '40 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка шеи с сопротивлением', category: 'Плечи', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка плеч за спиной', category: 'Плечи', reps: '30 сек', sets: '4', icon: 'stretching' },
                { name: 'Боковые наклоны с захватом', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Растяжка позвоночника (мост)', category: 'Спина', reps: '30 сек', sets: '4', icon: 'stretching' },
                { name: 'Продольный шпагат', category: 'Ноги', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Поперечный шпагат', category: 'Ноги', reps: '20 сек', sets: '4', icon: 'stretching' },
                { name: 'Поза верблюда', category: 'Спина', reps: '25 сек', sets: '4', icon: 'stretching' },
                { name: 'Складка с захватом стоп', category: 'Спина', reps: '30 сек', sets: '4', icon: 'stretching' }
            ]
        }
    },
    // ===================ОСОБЫЕ (PREMIUM) ===================
    'Особые': {
        'Кроссфит': {
            '1 LVL': [
                { name: 'Бёрпи (упрощённые)', category: 'Ноги', reps: '10', sets: '4', icon: 'crossfit' },
                { name: 'Прыжки на месте', category: 'Ноги', reps: '25', sets: '4', icon: 'crossfit' },
                { name: 'Отжимания от коленей', category: 'Грудь', reps: '12', sets: '4', icon: 'crossfit' },
                { name: 'Приседания без веса', category: 'Ноги', reps: '20', sets: '4', icon: 'crossfit' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '20 сек', sets: '4', icon: 'crossfit' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '20', sets: '4', icon: 'crossfit' }
            ],
            '2 LVL': [
                { name: 'Бёрпи', category: 'Ноги', reps: '15', sets: '4', icon: 'crossfit' },
                { name: 'Джампинг Джек', category: 'Ноги', reps: '25', sets: '4', icon: 'crossfit' },
                { name: 'Отжимания от пола', category: 'Грудь', reps: '15', sets: '4', icon: 'crossfit' },
                { name: 'Приседания с выпрыгиванием', category: 'Ноги', reps: '15', sets: '4', icon: 'crossfit' },
                { name: 'Планка на локтях', category: 'Пресс', reps: '35 сек', sets: '4', icon: 'crossfit' },
                { name: 'Горные лыжи', category: 'Ноги', reps: '20', sets: '4', icon: 'crossfit' },
                { name: 'Скакалка (без скакалки)', category: 'Ноги', reps: '30 сек', sets: '4', icon: 'crossfit' },
                { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '10', sets: '4', icon: 'crossfit' },
                { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '10', sets: '4', icon: 'crossfit' }
            ],
            '3 LVL': [
                { name: 'Бёрпи с отжиманием', category: 'Ноги', reps: '15', sets: '5', icon: 'crossfit' },
                { name: 'Джампинг Джек с утяжелением', category: 'Ноги', reps: '30', sets: '5', icon: 'crossfit' },
                { name: 'Отжимания с хлопком', category: 'Грудь', reps: '12', sets: '5', icon: 'crossfit' },
                { name: 'Приседания со штангой', category: 'Ноги', reps: '15', sets: '5', icon: 'crossfit' },
                { name: 'Планка с отягощением', category: 'Пресс', reps: '40 сек', sets: '5', icon: 'crossfit' },
                { name: 'Скакалка (быстрая)', category: 'Ноги', reps: '45 сек', sets: '5', icon: 'crossfit' },
                { name: 'Прыжки из приседа', category: 'Ноги', reps: '20', sets: '5', icon: 'crossfit' },
                { name: 'Бёрпи с прыжком на тумбу', category: 'Ноги', reps: '10', sets: '5', icon: 'crossfit' },
                { name: 'Горные лыжи с отягощением', category: 'Ноги', reps: '20', sets: '5', icon: 'crossfit' }
            ],
            '_premium': true
        },
        'Мужская сила': {
            '1 LVL': [
                { name: 'Кегель для мужчин', category: 'Ягодицы', reps: '12', sets: '4', icon: 'men' },
                { name: 'Ягодичный мостик', category: 'Ягодицы', reps: '20', sets: '4', icon: 'men' },
                { name: 'Приседания с задержкой', category: 'Ноги', reps: '15', sets: '4', icon: 'men' },
                { name: 'Планка с подъемом таза', category: 'Пресс', reps: '20 сек', sets: '4', icon: 'men' },
                { name: 'Махи ногами в сторону на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', icon: 'men' },
                { name: 'Махи ногами в сторону на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', icon: 'men' },
                { name: 'Подъем на носки', category: 'Ноги', reps: '20', sets: '4', icon: 'men' }
            ],
            '2 LVL': [
                { name: 'Кегель для мужчин', category: 'Ягодицы', reps: '20', sets: '4', icon: 'men' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '15', sets: '4', icon: 'men' },
                { name: 'Приседания с выпрыгиванием', category: 'Ноги', reps: '15', sets: '4', icon: 'men' },
                { name: 'Боковая планка с подъемом ноги на правую сторону', category: 'Пресс', reps: '25 сек', sets: '4', icon: 'men' },
                { name: 'Боковая планка с подъемом ноги на левую сторону', category: 'Пресс', reps: '25 сек', sets: '4', icon: 'men' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '12', sets: '4', icon: 'men' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '12', sets: '4', icon: 'men' },
                { name: 'Отведение ноги в сторону с резинкой на правую ногу', category: 'Ягодицы', reps: '20', sets: '4', icon: 'men' },
                { name: 'Отведение ноги в сторону с резинкой на левую ногу', category: 'Ягодицы', reps: '20', sets: '4', icon: 'men' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '12', sets: '4', icon: 'men' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '12', sets: '4', icon: 'men' }
            ],
            '3 LVL': [
                { name: 'Кегель для мужчин', category: 'Ягодицы', reps: '25', sets: '4', icon: 'men' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', icon: 'men' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', icon: 'men' },
                { name: 'Приседания со штангой', category: 'Ноги', reps: '15', sets: '4', icon: 'men' },
                { name: 'Планка с отягощением на тазу', category: 'Пресс', reps: '35 сек', sets: '4', icon: 'men' },
                { name: 'Румынская тяга с гантелями', category: 'Ягодицы', reps: '15', sets: '4', icon: 'men' },
                { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'men' },
                { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'men' },
                { name: 'Махи ногой назад с резинкой на правую ногу', category: 'Ягодицы', reps: '20', sets: '4', icon: 'men' },
                { name: 'Махи ногой назад с резинкой на левую ногу', category: 'Ягодицы', reps: '20', sets: '4', icon: 'men' },
                { name: 'Боковые выпады с гантелью на правую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'men' },
                { name: 'Боковые выпады с гантелью на левую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'men' }
            ],
            '_premium': true
        },
        'Женское счастье': {
            '1 LVL': [
                { name: 'Кегель для женщин', category: 'Ягодицы', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Ягодичный мостик', category: 'Ягодицы', reps: '20', sets: '4', icon: 'woman' },
                { name: 'Приседания плие', category: 'Ноги', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Планка на коленях', category: 'Пресс', reps: '25 сек', sets: '4', icon: 'woman' },
                { name: 'Махи ногой назад на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Махи ногой назад на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Отведение ноги в сторону стоя на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Отведение ноги в сторону стоя на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', icon: 'woman' }
            ],
            '2 LVL': [
                { name: 'Кегель для женщин', category: 'Ягодицы', reps: '20', sets: '4', icon: 'woman' },
                { name: 'Ягодичный мостик с гантелью', category: 'Ягодицы', reps: '20', sets: '4', icon: 'woman' },
                { name: 'Приседания плие с гантелью', category: 'Ноги', reps: '20', sets: '4', icon: 'woman' },
                { name: 'Боковая планка на правую сторону', category: 'Пресс', reps: '30 сек', sets: '4', icon: 'woman' },
                { name: 'Боковая планка на левую сторону', category: 'Пресс', reps: '30 сек', sets: '4', icon: 'woman' },
                { name: 'Махи ногой назад с утяжелением на правую ногу', category: 'Ягодицы', reps: '20', sets: '4', icon: 'woman' },
                { name: 'Махи ногой назад с утяжелением на левую ногу', category: 'Ягодицы', reps: '20', sets: '4', icon: 'woman' },
                { name: 'Отведение ноги в сторону с резинкой на правую ногу', category: 'Ягодицы', reps: '20', sets: '4', icon: 'woman' },
                { name: 'Отведение ноги в сторону с резинкой на левую ногу', category: 'Ягодицы', reps: '20', sets: '4', icon: 'woman' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', icon: 'woman' }
            ],
            '3 LVL': [
                { name: 'Кегель для женщин', category: 'Ягодицы', reps: '25', sets: '4', icon: 'woman' },
                { name: 'Ягодичный мостик на правую ногу', category: 'Ягодицы', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Ягодичный мостик на левую ногу', category: 'Ягодицы', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Приседания с гантелями глубокие', category: 'Ноги', reps: '20', sets: '4', icon: 'woman' },
                { name: 'Планка с подъемом ноги на правую ногу', category: 'Пресс', reps: '40 сек', sets: '4', icon: 'woman' },
                { name: 'Планка с подъемом ноги на левую ногу', category: 'Пресс', reps: '40 сек', sets: '4', icon: 'woman' },
                { name: 'Болгарские сплит-приседания на правую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Болгарские сплит-приседания на левую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Выпады с прыжком на правую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Выпады с прыжком на левую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Махи ногой назад с резинкой на правую ногу', category: 'Ягодицы', reps: '25', sets: '4', icon: 'woman' },
                { name: 'Махи ногой назад с резинкой на левую ногу', category: 'Ягодицы', reps: '25', sets: '4', icon: 'woman' },
                { name: 'Румынская тяга с гантелями', category: 'Ягодицы', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Боковые выпады с гантелью на правую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'woman' },
                { name: 'Боковые выпады с гантелью на левую ногу', category: 'Ноги', reps: '15', sets: '4', icon: 'woman' }
            ],
            '_premium': true
        }
    }
};

// =================== МАППИНГ ИКОНОК В КАТЕГОРИИ ДЛЯ СТАТИСТИКИ ===================
const ICON_TO_CATEGORY = {
    'bodybuilding': 'Руки',
    'shoulder': 'Плечи',
    'press': 'Пресс',
    'breast': 'Грудь',
    'back': 'Спина',
    'legs': 'Ноги',
    'WholeBody': 'Всё тело',
    'cardio': 'Кардио',
    'stretching': 'Гибкость',
    'charging': 'Зарядка',
    'Pilates': 'Всё тело',
    'crossfit': 'Всё тело',
    'men': 'Ягодицы',
    'woman': 'Ягодицы'
};

const DISPLAY_CATEGORIES = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'];

// =================== ПОЛУЧЕНИЕ ИКОНКИ ТРЕНИРОВКИ ===================
function getWorkoutIcon(workout) {
    // 1. Если у тренировки есть icon - используем его
    if (workout.icon) return workout.icon;
    
    // 2. Если есть категория - определяем по ней
    if (workout.category) {
        const categoryToIcon = {
            'Руки': 'bodybuilding',
            'Плечи': 'shoulder',
            'Пресс': 'press',
            'Грудь': 'breast',
            'Спина': 'back',
            'Ноги': 'legs',
            'Всё тело': 'WholeBody',
            'Кардио': 'cardio',
            'Гибкость': 'stretching',
            'Зарядка': 'charging',
            'Пилатес': 'Pilates',
            'Кроссфит': 'crossfit',
            'Мужская сила': 'men',
            'Женское счастье': 'woman'
        };
        if (categoryToIcon[workout.category]) {
            return categoryToIcon[workout.category];
        }
    }
    
    // 3. По названию
    const title = workout.title || '';
    const titleToIcon = {
        'Руки': 'bodybuilding',
        'Плечи': 'shoulder',
        'Пресс': 'press',
        'Грудь': 'breast',
        'Спина': 'back',
        'Ноги': 'legs',
        'Всё тело': 'WholeBody',
        'Кардио': 'cardio',
        'Растяжка': 'stretching',
        'Зарядка': 'charging',
        'Пилатес': 'Pilates',
        'Кроссфит': 'crossfit',
        'Мужская сила': 'men',
        'Женское счастье': 'woman'
    };
    for (const [key, icon] of Object.entries(titleToIcon)) {
        if (title.includes(key)) return icon;
    }
    
    // 4. По первому упражнению (как fallback)
    if (workout.exercises && workout.exercises.length > 0) {
        return getExerciseIcon(workout.exercises[0].name);
    }
    
    return 'bodybuilding';
}

// ===================ЕДИНАЯ СИСТЕМА УПРАВЛЕНИЯ ВКЛАДКАМИ ===================
const TabManager = {
    // Ключ для localStorage
    STORAGE_KEY: 'sportapp_tabs',
    
    // Состояние
    state: {
        stats: 'personal',
        workouts: 'ready',
        profile: 'my'
    },
    
    // Загрузить состояние из localStorage
    load() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                this.state = { ...this.state, ...parsed };
            } catch (e) {
                console.warn('Ошибка загрузки вкладок:', e);
            }
        }
        return this.state;
    },
    
    // Сохранить состояние
    save() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
    },
    
    // Переключить вкладку статистики
stats(tab) {
    this.state.stats = tab;
    activeStatsTab = tab;
        // Обновляем UI
        document.querySelectorAll('#page-stats .tab-btn').forEach(btn => {
            btn.classList.toggle('tab-btn-active', btn.dataset.tab === tab);
        });
        document.querySelectorAll('#page-stats .stats-tab-content').forEach(content => {
            content.classList.remove('stats-tab-content-active');
        });
        const target = document.getElementById('stats-' + tab);
        if (target) target.classList.add('stats-tab-content-active');
        this.save();
    },
    
    // Переключить вкладку тренировок
workouts(tab) {
    this.state.workouts = tab;
    activeWorkoutsTab = tab;
        // Обновляем UI
        document.querySelectorAll('#page-workouts .tab-btn').forEach(btn => {
            btn.classList.toggle('tab-btn-active', btn.dataset.tab === tab);
        });
        document.querySelectorAll('#page-workouts .tab-content').forEach(content => {
            content.classList.remove('tab-content-active');
        });
        document.getElementById('tab-' + tab).classList.add('tab-content-active');
        
        const resetBtn = document.getElementById('resetWorkoutsBtn');
        if (resetBtn) {
            const pagesEnabled = localStorage.getItem(EDIT_PAGES_KEY) !== 'false';
            resetBtn.style.display = (tab === 'ready' && pagesEnabled) ? 'block' : 'none';
        }
        this.save();
    },
    
    // Переключить вкладку профиля
profile(tab) {
    this.state.profile = tab;
    activeProfileTab = tab;
        // Обновляем UI
        const profileTabs = document.querySelectorAll('.profile-tab-btn');
        profileTabs.forEach(btn => {
            btn.classList.toggle('tab-btn-active', btn.dataset.tab === tab);
        });
        const contents = document.querySelectorAll('.profile-tab-content');
        contents.forEach(content => {
            content.classList.remove('profile-tab-content-active');
        });
        const target = document.getElementById('profileTab-' + tab);
        if (target) {
            target.classList.add('profile-tab-content-active');
        }
        if (tab === 'friends') {
            setTimeout(() => renderFriendsInProfile(), 100);
        }
        this.save();
    },
    
    // Применить все сохранённые вкладки
    applyAll() {
        this.stats(this.state.stats);
        this.workouts(this.state.workouts);
        this.profile(this.state.profile);
        console.log('✅ Вкладки восстановлены:', this.state);
    }
};

// Загружаем состояние при инициализации
TabManager.load();

// Единый обработчик для всех вкладок (готовые, личные, мировая, личная, мой, друзья)
document.addEventListener('click', function(e) {
    const target = e.target.closest('.tab-btn, .profile-tab-btn');
    if (!target) return;
    const tab = target.dataset.tab;
    if (!tab) return;

    const page = target.closest('.page');
    if (!page) return;

    if (page.id === 'page-workouts') {
        TabManager.workouts(tab);
    } else if (page.id === 'page-stats') {
        TabManager.stats(tab);
    } else if (page.id === 'page-profile') {
        TabManager.profile(tab);
    }
});

// ===================СОВМЕСТНЫЕ ТРЕНИРОВКИ ===================
let currentSessionId = null;
let isHost = false;
let sessionListener = null;
let inviteListener = null;
let coopExercises = [];
let partnerProgress = 0;
let myProgress = 0;
let sessionData = null;
let coopStarted = false;

// =================== ФУНКЦИИ ДЛЯ СОВМЕСТНЫХ ТРЕНИРОВОК ===================

window.cancelInvite = async function() {
    if (!currentSessionId) return;
    try {
        // Удаляем сессию
        await firebase.firestore()
            .collection('trainingSessions')
            .doc(currentSessionId)
            .delete();

        // Удаляем все уведомления с этим sessionId
        const snapshot = await firebase.firestore()
            .collection('notifications')
            .where('sessionId', '==', currentSessionId)
            .where('type', '==', 'train_invite')
            .get();
        const batch = firebase.firestore().batch();
        snapshot.forEach(doc => batch.delete(doc.ref));
        await batch.commit();

        if (sessionListener) {
            sessionListener();
            sessionListener = null;
        }
        currentSessionId = null;
        isHost = false;
        showToast('❌ Приглашение отменено');
        window.navigateTo('workouts');
    } catch (error) {
        console.error('Ошибка отмены:', error);
        showToast('❌ Не удалось отменить приглашение');
    }
};

function listenForInvites() {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (!user) {
            if (inviteListener) {
                inviteListener();
                inviteListener = null;
            }
            return;
        }
        if (inviteListener) {
            inviteListener();
            inviteListener = null;
        }
        inviteListener = firebase.firestore()
            .collection('notifications')
            .where('to', '==', user.uid)
            .where('type', '==', 'train_invite')
            .where('read', '==', false)
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        const data = change.doc.data();
                        const id = 'invite_' + data.sessionId;
                        // Проверяем, не было ли уже показано
                        if (isNotificationSeen(id)) return;
                        // Показываем уведомление с кнопкой "Принять"
                        showNotification(
                            '🏋️',
                            `${data.fromName} приглашает вас на "${data.workoutTitle}"!`,
                            function() {
                                console.log('🔵 actionCallback вызван!');
                                acceptInvite(data.sessionId, change.doc.id);
                            }
                        );
                        markNotificationSeen(id);
                    }
                });
            });
    });
}

function showInviteNotification(data, notificationId) {
    const id = 'invite_' + data.sessionId;
    if (isNotificationSeen(id)) return;
    
    // Вместо передачи actionCallback, сохраняем данные и показываем уведомление
    showNotificationWithAction(
        '🏋️',
        `${data.fromName} приглашает вас на "${data.workoutTitle}"!`,
        function() {
            acceptInvite(data.sessionId, notificationId);
        }
    );
    markNotificationSeen(id);
}

function showNotificationWithAction(icon, text, actionCallback) {
    const notificationId = text + icon;
    const seen = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    if (seen.includes(notificationId)) {
        console.log('Уведомление уже показано:', text);
        return;
    }

    notificationQueue.push({ icon, text, actionCallback, id: notificationId });
    
    if (!isNotificationShowing) {
        processNotificationQueue();
    }
}

async function acceptInvite(sessionId, notificationId) {
    console.log('🔵 acceptInvite вызвана, sessionId:', sessionId);
    try {
        const user = await getFirebaseUser();
        if (!user) {
            console.log('❌ Пользователь не авторизован');
            showToast('❌ Вы не авторизованы');
            return;
        }
        console.log('✅ Пользователь авторизован:', user.uid);
        
        const doc = await firebase.firestore()
            .collection('trainingSessions')
            .doc(sessionId)
            .get();
            
        if (!doc.exists) {
            console.log('❌ Сессия не найдена');
            if (notificationId) {
                await firebase.firestore()
                    .collection('notifications')
                    .doc(notificationId)
                    .update({ read: true });
            }
            showToast('❌ Приглашение устарело или отменено');
            return;
        }
        
        const data = doc.data();
        console.log('📄 Данные сессии:', data);
        
        if (data.status === 'completed') {
            console.log('❌ Тренировка уже завершена');
            showToast('❌ Тренировка уже завершена');
            return;
        }
        
        if (notificationId) {
            console.log('📝 Помечаем уведомление как прочитанное');
            await firebase.firestore()
                .collection('notifications')
                .doc(notificationId)
                .update({ read: true });
        }
        
        console.log('🔄 Обновляем сессию: guestReady=true, hostReady=true, status=active');
        await firebase.firestore()
            .collection('trainingSessions')
            .doc(sessionId)
            .update({
                guestReady: true,
                hostReady: true,
                status: 'active',
                startedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        
        console.log('✅ Сессия обновлена');
        
        // ПРИНУДИТЕЛЬНОЕ ОБНОВЛЕНИЕ: отключаем и включаем сеть
       // console.log('🔄 Принудительное обновление Firestore...');
       // await firebase.firestore().disableNetwork();
       // await firebase.firestore().enableNetwork();
       // console.log('✅ Сеть перезапущена');
        
        currentSessionId = sessionId;
        isHost = false;
        
        console.log('📍 Переходим на страницу ожидания');
        window.navigateTo('training-waiting');
        
        // Подписываемся с задержкой
        setTimeout(() => {
            console.log('👂 Подписываемся на изменения сессии (с задержкой)');
            listenSession(sessionId);
        }, 500);
        
        showToast(`✅ Вы присоединились к ${data.hostName}`);
        console.log('✅ acceptInvite завершена');
    } catch (error) {
        console.error('❌ Ошибка в acceptInvite:', error);
        showToast('❌ Не удалось присоединиться к тренировке');
    }
}

function listenSession(sessionId) {
    console.log('🔵 listenSession вызвана, sessionId:', sessionId);
    console.log('🔵 isHost:', isHost);
    console.log('🔵 coopStarted:', coopStarted);
    
    if (sessionListener) {
        console.log('🔄 Отключаем старый слушатель');
        sessionListener();
        sessionListener = null;
    }
    
    // Сначала проверяем, существует ли сессия
    firebase.firestore()
        .collection('trainingSessions')
        .doc(sessionId)
        .get()
        .then((doc) => {
            if (!doc.exists) {
                console.log('❌ Сессия не существует при проверке');
                return;
            }
            console.log('✅ Сессия существует, подписываемся на изменения');
            
            // ПРАВИЛЬНАЯ ПОДПИСКА
            sessionListener = firebase.firestore()
                .collection('trainingSessions')
                .doc(sessionId)
                .onSnapshot(
                    { includeMetadataChanges: true },
                    (doc) => {
                        console.log('📡 onSnapshot сработал (с метаданными)');
                        handleSessionSnapshot(doc);
                    },
                    (error) => {
                        console.error('❌ Ошибка в onSnapshot:', error);
                    }
                );
        })
        .catch((error) => {
            console.error('❌ Ошибка проверки сессии:', error);
        });
    
    console.log('✅ listenSession завершена');
}

function handleSessionSnapshot(doc) {
    console.log('📡 handleSessionSnapshot вызвана');
    console.log('📡 Метаданные:', doc.metadata);
    
    if (!doc.exists) {
        console.log('❌ Документ не существует');
        if (sessionListener) {
            sessionListener();
            sessionListener = null;
        }
        window.navigateTo('workouts');
        return;
    }
    
    const data = doc.data();
    console.log('📄 Данные из onSnapshot:', {
        status: data.status,
        hostReady: data.hostReady,
        guestReady: data.guestReady,
        hostProgress: data.hostProgress,
        guestProgress: data.guestProgress,
        hostName: data.hostName,
        guestName: data.guestName
    });
    
    if (isHost) {
        partnerProgress = data.guestProgress || 0;
        myProgress = data.hostProgress || 0;
    } else {
        partnerProgress = data.hostProgress || 0;
        myProgress = data.guestProgress || 0;
    }
    console.log('📊 Прогресс:', { myProgress, partnerProgress });

    // Если оба готовы и тренировка ещё не запущена
    if (data.status === 'active' && data.hostReady && data.guestReady && !coopStarted) {
        console.log('🎯 УСЛОВИЕ ВЫПОЛНЕНО! Запускаем тренировку');
        console.log('   status:', data.status);
        console.log('   hostReady:', data.hostReady);
        console.log('   guestReady:', data.guestReady);
        console.log('   coopStarted:', coopStarted);
        coopStarted = true;
        startCoopTraining(data);
        return;
    } else {
        console.log('⏳ Условие НЕ выполнено:');
        console.log('   status === "active":', data.status === 'active');
        console.log('   hostReady:', data.hostReady);
        console.log('   guestReady:', data.guestReady);
        console.log('   !coopStarted:', !coopStarted);
    }

    // Если уже на странице тренировки, обновляем UI
    const isTrainingSessionActive = document.getElementById('page-training-session').classList.contains('page-active');
    console.log('📱 Страница тренировки активна?', isTrainingSessionActive);
    
    if (isTrainingSessionActive) {
        console.log('🔄 Обновляем UI тренировки');
        updateCoopUI();
        return;
    }

    const isWaitingActive = document.getElementById('page-training-waiting').classList.contains('page-active');
    console.log('📱 Страница ожидания активна?', isWaitingActive);
    
    if (isWaitingActive) {
        console.log('📱 Мы на странице ожидания');
        if (data.guestReady && data.hostReady) {
            console.log('🎯 Оба готовы!');
            if (!coopStarted) {
                console.log('🚀 Запускаем тренировку из страницы ожидания');
                coopStarted = true;
                startCoopTraining(data);
            }
        } else if (data.guestReady) {
            console.log('👤 Друг присоединился!');
            showToast('👤 Друг присоединился! Начинаем...');
        }
    }

    if (data.status === 'completed') {
        console.log('🏁 Тренировка завершена!');
        showToast('🎉 Тренировка завершена!');
        if (sessionListener) {
            sessionListener();
            sessionListener = null;
        }
        setTimeout(() => {
            window.navigateTo('workouts');
        }, 2000);
    }
}

function startCoopTraining(data) {
    console.log('🔵 startCoopTraining вызвана');
    console.log('📄 Данные:', {
        workoutTitle: data.workoutTitle,
        exercisesCount: data.exercises?.length || 0,
        hostProgress: data.hostProgress,
        guestProgress: data.guestProgress,
        isHost: isHost
    });
    
    // Останавливаем слушатель, чтобы не запускать повторно
    if (sessionListener) {
        console.log('🔄 Останавливаем слушатель');
        sessionListener();
        sessionListener = null;
    }
    
    // Сбрасываем флаг, чтобы при повторных вызовах не было проблем
    coopStarted = true;
    
    coopExercises = data.exercises || [];
    console.log('📋 Упражнений:', coopExercises.length);
    
    if (isHost) {
        myProgress = data.hostProgress || 0;
        partnerProgress = data.guestProgress || 0;
    } else {
        myProgress = data.guestProgress || 0;
        partnerProgress = data.hostProgress || 0;
    }
    console.log('📊 Прогресс после установки:', { myProgress, partnerProgress });
    
    const title = data.workoutTitle || 'Совместная тренировка';
    const category = 'Совместная';
    
    const exercises = coopExercises.map((ex, index) => ({
        ...ex,
        completed: index < myProgress
    }));
    console.log('📋 Упражнения с completed:', exercises.map(e => ({ name: e.name, completed: e.completed })));
    
    console.log('🚀 Запускаем startTrainingSession');
    startTrainingSession(exercises, title, category, 'bodybuilding');
    
    sessionWorkoutTitle = title + ' (совместно)';
    sessionData = data;
    console.log('✅ startCoopTraining завершена');
    
    setTimeout(() => {
        console.log('⏰ Обновляем UI тренировки (задержка 500ms)');
        updateCoopUI();
    }, 500);
}

function updateCoopUI() {
    const total = coopExercises.length || 0;
    const partnerName = isHost ? (sessionData?.guestName || 'Друг') : (sessionData?.hostName || 'Друг');
    let partnerEl = document.getElementById('partnerInfo');
    if (!partnerEl) {
        const progressRow = document.querySelector('.session-progress-row');
        if (progressRow) {
            const div = document.createElement('div');
            div.id = 'partnerInfo';
            div.style.cssText = `
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.3rem 0.5rem;
                background: var(--accent-light);
                border-radius: 8px;
                margin-top: 0.3rem;
                font-size: 0.8rem;
            `;
            div.innerHTML = `
                <span>👤 ${partnerName}</span>
                <span id="partnerProgressText">0/${total}</span>
            `;
            progressRow.appendChild(div);
        }
    }
    const progressText = document.getElementById('partnerProgressText');
    if (progressText) {
        progressText.textContent = `${Math.min(partnerProgress, total)}/${total}`;
    }
    if (partnerProgress >= total && total > 0) {
        const statusEl = document.querySelector('#partnerInfo span:first-child');
        if (statusEl) {
            statusEl.innerHTML = '✅ Партнёр завершил!';
        }
    }
}

// Переопределяем markCurrentComplete для обновления прогресса
const originalMarkComplete = markCurrentComplete;
markCurrentComplete = function() {
    originalMarkComplete();
    if (currentSessionId && sessionData) {
        const completedCount = sessionCompleted.size;
        updateCoopProgress(completedCount);
    }
};

async function updateCoopProgress(completedCount) {
    if (!currentSessionId) return;
    try {
        const update = {};
        if (isHost) {
            update.hostProgress = completedCount;
            update['exercises'] = coopExercises.map((ex, index) => ({
                ...ex,
                hostCompleted: index < completedCount
            }));
        } else {
            update.guestProgress = completedCount;
            update['exercises'] = coopExercises.map((ex, index) => ({
                ...ex,
                guestCompleted: index < completedCount
            }));
        }
        const doc = await firebase.firestore()
            .collection('trainingSessions')
            .doc(currentSessionId)
            .get();
        const data = doc.data();
        const total = data.totalExercises || data.exercises?.length || 0;
        const hostDone = data.hostProgress >= total;
        const guestDone = data.guestProgress >= total;
        if (hostDone && guestDone && total > 0) {
            update.status = 'completed';
            update.completedAt = firebase.firestore.FieldValue.serverTimestamp();
        }
        await firebase.firestore()
            .collection('trainingSessions')
            .doc(currentSessionId)
            .update(update);
    } catch (error) {
        console.error('Ошибка обновления прогресса:', error);
    }
}

function showFriendSelectModal(friends) {
    const oldModal = document.getElementById('friendSelectModal');
    if (oldModal) oldModal.remove();
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'friendSelectModal';
    overlay.innerHTML = `
        <div class="modal-content" style="max-width: 400px;">
            <div class="modal-title">Выберите друга</div>
            <div style="max-height: 300px; overflow-y: auto; margin-bottom: 1rem;">
                ${friends.map(f => {
                    const level = getCurrentLevel(f.totalXp || 0).id;
                    const xp = (f.totalXp || 0).toFixed(1);
                    return `
                    <div class="friend-itemMOD" onclick="selectFriendForCoop('${f.id}')" style="cursor: pointer;">
                        <div class="friend-avatar">${(f.displayName || 'П')[0].toUpperCase()}</div>
                        <div class="friend-info">
                            <strong>${f.displayName || 'Пользователь'}</strong>
                            <span>Уровень ${level} · ${xp} XP</span>
                        </div>
                    </div>
                `}).join('')}
            </div>
            <button class="btn btn-primary" onclick="document.getElementById('friendSelectModal').remove()">Закрыть</button>
        </div>
    `;
    document.body.appendChild(overlay);
}

window.selectFriendForCoop = function(friendId) {
    const modal = document.getElementById('friendSelectModal');
    if (modal) modal.remove();
    // Загружаем данные друга и отправляем приглашение
    getUserProfile(friendId).then(result => {
        if (result.success) {
            const friendName = result.data.displayName || 'Пользователь';
            sendCoopInvite(friendId, friendName);
        } else {
            showToast('❌ Не удалось загрузить данные друга');
        }
    });
};

async function sendCoopInvite(friendId, friendName) {
    console.log('🔵 sendCoopInvite вызвана');
    console.log('📄 friendId:', friendId);
    console.log('📄 friendName:', friendName);
    
    const workoutData = window._currentWorkoutForInvite;
    console.log('📄 workoutData:', workoutData);
    
    if (!workoutData || !workoutData.exercises || workoutData.exercises.length === 0) {
        console.log('❌ Нет данных тренировки');
        showToast('❌ Сначала выберите тренировку');
        return;
    }
    
    try {
        const user = await getFirebaseUser();
        if (!user) {
            console.log('❌ Пользователь не авторизован');
            showToast('❌ Вы не авторизованы');
            return;
        }
        console.log('✅ Пользователь авторизован:', user.uid);
        
        // Проверка, не занят ли друг
        console.log('🔍 Проверяем, не занят ли друг...');
        const busyCheck = await firebase.firestore()
            .collection('trainingSessions')
            .where('guestId', '==', friendId)
            .where('status', 'in', ['waiting', 'active'])
            .get();
        
        if (!busyCheck.empty) {
            console.log('⚠️ Друг уже участвует в тренировке');
            showToast('⚠️ Друг уже участвует в тренировке');
            return;
        }
        console.log('✅ Друг свободен');
        
        // Создаём сессию
        console.log('📝 Создаём сессию...');
        const sessionRef = await firebase.firestore().collection('trainingSessions').add({
            hostId: user.uid,
            guestId: friendId,
            hostName: user.displayName || 'Пользователь',
            guestName: friendName,
            workoutTitle: workoutData.title,
            exercises: workoutData.exercises.map(ex => ({ 
                ...ex, 
                hostCompleted: false, 
                guestCompleted: false 
            })),
            status: 'waiting',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            hostReady: false,
            guestReady: false,
            hostProgress: 0,
            guestProgress: 0,
            totalExercises: workoutData.exercises.length
        });
        
        console.log('✅ Сессия создана, sessionId:', sessionRef.id);
        console.log('📄 Данные сессии:', {
            hostId: user.uid,
            guestId: friendId,
            workoutTitle: workoutData.title,
            exercisesCount: workoutData.exercises.length
        });
        
        currentSessionId = sessionRef.id;
        isHost = true;
        sessionData = {
            hostId: user.uid,
            guestId: friendId,
            guestName: friendName,
            workoutTitle: workoutData.title,
            exercises: workoutData.exercises,
            totalExercises: workoutData.exercises.length
        };
        coopExercises = workoutData.exercises;
        
        // Отправляем уведомление другу
        console.log('📨 Отправляем уведомление другу...');
        await firebase.firestore().collection('notifications').add({
            to: friendId,
            from: user.uid,
            fromName: user.displayName || 'Пользователь',
            type: 'train_invite',
            sessionId: sessionRef.id,
            workoutTitle: workoutData.title,
            message: `${user.displayName || 'Пользователь'} приглашает вас на совместную тренировку!`,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            read: false
        });
        console.log('✅ Уведомление отправлено');
        
        showToast(`✅ Приглашение отправлено ${friendName}`);
        
        // Переходим на страницу ожидания
        console.log('📍 Переходим на страницу ожидания');
        window.navigateTo('training-waiting');
        
        // Даем время на сохранение в Firestore
        setTimeout(() => {
            console.log('👂 Подписываемся на изменения сессии (с задержкой 500ms)');
            listenSession(currentSessionId);
        }, 500);
        
        console.log('✅ sendCoopInvite завершена');
    } catch (error) {
        console.error('❌ Ошибка в sendCoopInvite:', error);
        showToast('❌ Не удалось отправить приглашение');
    }
}

const originalFinish = finishTrainingSession;
finishTrainingSession = function() {
    if (currentSessionId && sessionData) {
        const total = sessionData.totalExercises || coopExercises.length || 0;
        if (partnerProgress < total) {
            showToast('👀 Ожидаем завершения партнёра...');
            return;
        }
        // очистка
        currentSessionId = null;
        isHost = false;
        sessionData = null;
        coopExercises = [];
        partnerProgress = 0;
        myProgress = 0;
        coopStarted = false;
        if (sessionListener) {
            sessionListener();
            sessionListener = null;
        }
    }
    originalFinish();
};

// Создаём глобальные переменные для совместимости со старым кодом
let activeStatsTab = TabManager.state.stats;
let activeWorkoutsTab = TabManager.state.workouts;
let activeProfileTab = TabManager.state.profile;

// Обёртки для совместимости
function applyStatsTab(tab) { TabManager.stats(tab); activeStatsTab = tab; }
function applyWorkoutsTab(tab) { TabManager.workouts(tab); activeWorkoutsTab = tab; }
function switchProfileTab(tab) { TabManager.profile(tab); activeProfileTab = tab; }
function loadTabsState() { TabManager.load(); }
function saveTabsState() { TabManager.save(); }

// ===================ЗАЩИТА ОТ СПАМА КНОПОК ===================
const buttonCooldowns = new Map();

function preventDoubleClick(buttonId, cooldownMs = 2000) {
    const now = Date.now();
    const lastClick = buttonCooldowns.get(buttonId) || 0;
    if (now - lastClick < cooldownMs) {
        console.warn(`Кнопка ${buttonId} заблокирована (${cooldownMs}мс)`);
        return false;
    }
    buttonCooldowns.set(buttonId, now);
    return true;
}

function getButtonCooldown(buttonId) {
    const now = Date.now();
    const lastClick = buttonCooldowns.get(buttonId) || 0;
    return Math.max(0, 2000 - (now - lastClick));
}

// ===================ФОРМАТИРОВАНИЕ ПОВТОРЕНИЙ ===================
function formatReps(reps) {
    const repsStr = String(reps || '');
    if (repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд')) {
        const num = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 0;
        let word = 'секунд';
        if (num === 1) word = 'секунда';
        else if (num >= 2 && num <= 4) word = 'секунды';
        return `${num} ${word}`;
    }
    const num = parseInt(repsStr) || 0;
    let word = 'повторений';
    if (num === 1) word = 'повторение';
    else if (num >= 2 && num <= 4) word = 'повторения';
    return `${num} ${word}`;
}

function formatSets(sets) {
    const num = parseInt(sets) || 0;
    let word = 'подходов';
    if (num === 1) word = 'подход';
    else if (num >= 2 && num <= 4) word = 'подхода';
    return `${num} ${word}`;
}

// ===================МАКСИМАЛЬНОЕ КОЛИЧЕСТВО УПРАЖНЕНИЙ ===================
function getMaxExercisesForLevel(level, isCustom) {
    if (isCustom) return 20;
    const maxMap = { '1 LVL': 10, '2 LVL': 15, '3 LVL': 20 };
    return maxMap[level] || 20;
}

// ===================СОХРАНЕНИЕ ДАННЫХ В localStorage ===================
const exercisesDataDefault = JSON.parse(JSON.stringify(exercisesData));
const STORAGE_KEY = 'sportapp_exercisesData';

function loadExercisesData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            for (const category in parsed) {
                if (exercisesData[category]) {
                    for (const level in parsed[category]) {
                        exercisesData[category][level] = parsed[category][level];
                    }
                } else {
                    exercisesData[category] = parsed[category];
                }
            }
        } catch (e) {
            console.warn('Ошибка загрузки данных тренировок:', e);
        }
    }
}

function saveExercisesData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(exercisesData));
}

loadExercisesData();

// ===================ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ===================
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let isOfflineModalShown = false;
let isLoggingIn = false;
let isDataLoaded = false;

window.statsEditor = null;
window.workoutsEditor = null;

let isEditingWorkout = false;
let isEditingProfile = false;

// ===================СИСТЕМА УВЕДОМЛЕНИЙ ===================
const NOTIFICATIONS_KEY = 'notificationsSeen';
const LAST_VISIT_KEY = 'lastVisitDate';
const LAST_WORLD_RANK_KEY = 'lastWorldRank';
const LAST_FRIENDS_RANK_KEY = 'lastFriendsRank';

let notificationQueue = [];
let isNotificationShowing = false;
const shownThisSession = new Set();

const notificationContainer = document.getElementById('notificationContainer');
const notificationCard = document.getElementById('notificationCard');
const notificationIcon = document.getElementById('notificationIcon');
const notificationText = document.getElementById('notificationText');
const notificationOkBtn = document.getElementById('notificationOkBtn');

notificationContainer.style.display = 'block';

function showNotification(icon, text, actionCallback) {
    const notificationId = text + icon;
    const seen = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    if (seen.includes(notificationId)) {
        console.log('Уведомление уже показано:', text);
        return;
    }

    notificationQueue.push({ icon, text, actionCallback, id: notificationId });
    
    if (!isNotificationShowing) {
        processNotificationQueue();
    }
}

function showFriendRequestNotification(icon, text, requestId) {
    const shownRequests = JSON.parse(localStorage.getItem('shownFriendRequests') || '[]');
    if (shownRequests.includes(requestId) || shownThisSession.has(requestId)) {
        console.log('⚠️ Уведомление для заявки уже было показано:', requestId);
        return;
    }
    
    shownThisSession.add(requestId);
    
    notificationQueue.push({ 
        icon, 
        text, 
        actionCallback: null, 
        id: null, 
        isFriendRequest: true,
        requestId: requestId 
    });
    
    if (!isNotificationShowing) {
        processNotificationQueue();
    }
}

function processNotificationQueue() {
    console.log('🔵 processNotificationQueue вызвана');
    console.log('📊 Очередь:', notificationQueue.length);
    console.log('📊 isNotificationShowing:', isNotificationShowing);
    
    if (notificationQueue.length === 0 || isNotificationShowing) {
        console.log('⏭️ Очередь пуста или уведомление уже показывается');
        return;
    }
    
    isNotificationShowing = true;
    const notification = notificationQueue.shift();
    console.log('📄 Уведомление:', notification);
    
    notificationIcon.textContent = notification.icon;
    notificationText.textContent = notification.text;
    
    // Проверяем, что кнопка существует
    const okBtn = document.getElementById('notificationOkBtn');
    console.log('🔍 Кнопка notificationOkBtn найдена?', okBtn ? 'Да' : 'Нет');
    
    // Если есть actionCallback — меняем текст кнопки на "Принять"
    if (notification.actionCallback) {
        console.log('🔵 Есть actionCallback, ставим кнопку "Принять"');
        okBtn.textContent = 'Принять';
        okBtn.onclick = function(e) {
            console.log('🔵 КНОПКА "ПРИНЯТЬ" НАЖАТА!');
            console.log('🔵 event:', e);
            console.log('🔵 actionCallback:', notification.actionCallback);
            
            // Вызываем actionCallback
            if (notification.actionCallback) {
                console.log('🔵 Вызываем actionCallback');
                try {
                    notification.actionCallback();
                    console.log('✅ actionCallback выполнен');
                } catch (error) {
                    console.error('❌ Ошибка в actionCallback:', error);
                }
            } else {
                console.log('⚠️ actionCallback не определён');
            }
            hideNotification();
            
            if (notification.isFriendRequest && notification.requestId) {
                const shownRequests = JSON.parse(localStorage.getItem('shownFriendRequests') || '[]');
                if (!shownRequests.includes(notification.requestId)) {
                    shownRequests.push(notification.requestId);
                    localStorage.setItem('shownFriendRequests', JSON.stringify(shownRequests));
                }
                shownThisSession.delete(notification.requestId);
            }
            
            if (!notification.isFriendRequest && notification.id) {
                markNotificationSeen(notification.id);
            }
        };
    } else {
        console.log('🔵 Нет actionCallback, ставим кнопку "ОК"');
        okBtn.textContent = 'ОК';
        okBtn.onclick = function() {
            console.log('🔵 Кнопка "ОК" нажата');
            hideNotification();
            
            if (notification.isFriendRequest && notification.requestId) {
                const shownRequests = JSON.parse(localStorage.getItem('shownFriendRequests') || '[]');
                if (!shownRequests.includes(notification.requestId)) {
                    shownRequests.push(notification.requestId);
                    localStorage.setItem('shownFriendRequests', JSON.stringify(shownRequests));
                }
                shownThisSession.delete(notification.requestId);
            }
            
            if (!notification.isFriendRequest && notification.id) {
                markNotificationSeen(notification.id);
            }
        };
    }
    
    console.log('🔍 Кнопка после установки onclick:', okBtn);
    console.log('🔍 onclick:', okBtn.onclick);
    
    notificationCard.classList.remove('show');
    notificationCard.style.transform = 'translateY(-120px)';
    notificationCard.style.opacity = '0';
    
    setTimeout(() => {
        notificationCard.classList.add('show');
        notificationCard.style.transform = '';
        notificationCard.style.opacity = '';
        console.log('✅ Уведомление показано');
    }, 100);
}

function hideNotification() {
    console.log('🔵 hideNotification вызвана');
    notificationCard.classList.remove('show');
    isNotificationShowing = false;
    notificationOkBtn.onclick = null;
    
    setTimeout(() => {
        if (notificationQueue.length > 0) {
            console.log('🔄 Показываем следующее уведомление');
            processNotificationQueue();
        }
    }, 400);
}

function markNotificationSeen(id) {
    const seen = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    if (!seen.includes(id)) {
        seen.push(id);
        localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(seen));
    }
}

function isNotificationSeen(id) {
    const seen = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    return seen.includes(id);
}

function clearSeenNotifications() {
    localStorage.removeItem(NOTIFICATIONS_KEY);
    localStorage.removeItem('shownFriendRequests');
    console.log('✅ История уведомлений очищена');
}

// ===================ДЕФОЛТНЫЕ ЛЕЙАУТЫ ===================
function getDefaultStatsLayout() {
    return {
        statsSummary: ['workouts', 'minutes', 'exercises'],
        statsBlocksContainer: ['muscles', 'categories', 'calendar', 'history', 'world-leaderboard', 'friends-leaderboard'],
        exerciseMuscleStats: ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы'],
        categoriesStats: ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело']
    };
}

function getDefaultWorkoutsLayout() {
    return {
        workoutsBlocksContainer: ['strength', 'fitness', 'premium'],
        catalogGridStrength: ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Всё тело'],
        catalogGridFitness: ['Зарядка', 'Кардио', 'Пилатес', 'Растяжка'],
        catalogGridPremium: ['Кроссфит', 'Мужская сила', 'Женское счастье'],
        myWorkoutsList: []
    };
}

function saveStatsLayout(layout) {
    localStorage.setItem('statsLayout', JSON.stringify(layout));
}

function saveWorkoutsLayout(layout) {
    localStorage.setItem('workoutsLayout', JSON.stringify(layout));
}

function applySavedWorkoutsOrder() {
    const layout = JSON.parse(localStorage.getItem('workoutsLayout'));
    if (!layout) return;

    const blocksContainer = document.getElementById('workoutsBlocksContainer');
    if (blocksContainer && layout.workoutsBlocksContainer) {
        const blockMap = {};
        blocksContainer.querySelectorAll('.section-block').forEach(b => {
            const id = b.dataset.blockId;
            if (id) blockMap[id] = b;
        });
        layout.workoutsBlocksContainer.forEach(id => {
            if (blockMap[id]) blocksContainer.appendChild(blockMap[id]);
        });
    }

    const containers = [
        { id: 'catalogGridStrength', dataAttr: 'category' },
        { id: 'catalogGridFitness', dataAttr: 'category' },
        { id: 'catalogGridPremium', dataAttr: 'category' },
        { id: 'myWorkoutsList', dataAttr: 'workoutId' }
    ];
    containers.forEach(({ id, dataAttr }) => {
        const list = document.getElementById(id);
        if (!list) return;
        const items = layout[id] || [];
        if (items.length === 0) return;
        const childMap = {};
        list.querySelectorAll('.item-card').forEach(el => {
            const key = el.dataset[dataAttr];
            if (key) childMap[key] = el;
        });
        items.forEach(key => {
            if (childMap[key]) list.appendChild(childMap[key]);
        });
    });
}

function applySavedStatsOrder() {
    const layout = JSON.parse(localStorage.getItem('statsLayout'));
    if (!layout) return;

    const summary = document.getElementById('statsSummary');
    if (summary && layout.statsSummary) {
        const childMap = {};
        summary.querySelectorAll('.stat-card').forEach(el => {
            const id = el.dataset.statId;
            if (id) childMap[id] = el;
        });
        layout.statsSummary.forEach(id => {
            if (childMap[id]) summary.appendChild(childMap[id]);
        });
    }

    const blocksContainer = document.getElementById('statsBlocksContainer');
    if (blocksContainer && layout.statsBlocksContainer) {
        const blockMap = {};
        blocksContainer.querySelectorAll('.section-block').forEach(b => {
            const id = b.dataset.blockId;
            if (id) blockMap[id] = b;
        });
        layout.statsBlocksContainer.forEach(id => {
            if (blockMap[id]) blocksContainer.appendChild(blockMap[id]);
        });
    }

    const lists = [
        { id: 'exerciseMuscleStats', dataAttr: 'muscleName' },
        { id: 'categoriesStats', dataAttr: 'categoryName' }
    ];
    lists.forEach(({ id, dataAttr }) => {
        const list = document.getElementById(id);
        if (!list) return;
        const items = layout[id] || [];
        if (items.length === 0) return;
        const childMap = {};
        list.querySelectorAll('.stat-item').forEach(el => {
            const name = el.querySelector('.stat-name')?.textContent;
            if (name) childMap[name] = el;
        });
        items.forEach(name => {
            if (childMap[name]) list.appendChild(childMap[name]);
        });
    });
}

function applySavedWorldStatsOrder() {
    const layout = JSON.parse(localStorage.getItem('worldStatsLayout'));
    if (!layout) return;

    const container = document.getElementById('worldStatsBlocksContainer');
    if (!container) return;

    const items = layout['worldStatsBlocksContainer'] || [];
    if (items.length === 0) return;

    const childMap = {};
    container.querySelectorAll('.section-block').forEach(el => {
        const id = el.dataset.blockId;
        if (id) childMap[id] = el;
    });

    items.forEach(id => {
        if (childMap[id]) {
            container.appendChild(childMap[id]);
        }
    });
}

// ===================ОФЛАЙН-ОЧЕРЕДЬ ===================
const PENDING_KEY = 'pendingWorkouts';

function getPendingWorkouts() {
    return JSON.parse(localStorage.getItem(PENDING_KEY)) || [];
}

function savePendingWorkouts(workouts) {
    localStorage.setItem(PENDING_KEY, JSON.stringify(workouts));
}

function addPendingWorkout(workoutData) {
    const pending = getPendingWorkouts();
    workoutData._localId = Date.now() + '_' + Math.random().toString(36).slice(2, 6);
    if (!workoutData.category) workoutData.category = 'Без категории';
    if (!workoutData.icon) workoutData.icon = 'bodybuilding'; // ← ДОБАВИТЬ
    pending.push(workoutData);
    savePendingWorkouts(pending);
}

function removePendingWorkout(localId) {
    let pending = getPendingWorkouts();
    pending = pending.filter(w => w._localId !== localId);
    savePendingWorkouts(pending);
}

async function syncPendingWorkouts() {
    const pending = getPendingWorkouts();
    if (pending.length === 0) return;
    const user = await getFirebaseUser();
    if (!user) {
        console.warn('Пользователь не авторизован, синхронизация отложена');
        return;
    }
    let syncedIds = [];
    let failedIds = [];
    for (const workout of pending) {
        try {
const result = await saveWorkoutToFirestore(user.uid, {
    title: workout.title,
    date: workout.date,
    durationSeconds: workout.durationSeconds,
    exercises: workout.exercises,
    xpEarned: workout.xpEarned,
    category: workout.category || 'Без категории',
    icon: workout.icon || 'bodybuilding' // ← ДОБАВИТЬ
});
            if (result.success) {
                const profileResult = await getUserProfile(user.uid);
                if (profileResult.success) {
                    const currentXp = profileResult.data.totalXp || 0;
                    await updateUserProfile(user.uid, { totalXp: currentXp + workout.xpEarned });
                }
                syncedIds.push(workout._localId);
            } else {
                failedIds.push(workout._localId);
                console.warn('Ошибка синхронизации тренировки:', result.error);
            }
        } catch (e) {
            failedIds.push(workout._localId);
            console.warn('Ошибка синхронизации, повторим позже:', e);
        }
    }
    if (syncedIds.length > 0) {
        let pendingAfter = getPendingWorkouts();
        pendingAfter = pendingAfter.filter(w => !syncedIds.includes(w._localId));
        savePendingWorkouts(pendingAfter);
        showToast(`✅ Синхронизировано ${syncedIds.length} тренировок`);
    }
    if (failedIds.length > 0) {
        console.log(`${failedIds.length} тренировок ожидают синхронизации`);
    }
}

// ===================УРОВНИ (15 УРОВНЕЙ) ===================
const levels = [
    { id: 1, name: 'НОВИЧОК', minXp: 0, maxXp: 99 },
    { id: 2, name: 'ЛЮБИТЕЛЬ', minXp: 100, maxXp: 249 },
    { id: 3, name: 'УЧЕНИК', minXp: 250, maxXp: 449 },
    { id: 4, name: 'ПРОДВИНУТЫЙ', minXp: 450, maxXp: 699 },
    { id: 5, name: 'ЭКСПЕРТ', minXp: 700, maxXp: 999 },
    { id: 6, name: 'ПРОФЕССИОНАЛ', minXp: 1000, maxXp: 1499 },
    { id: 7, name: 'МАСТЕР', minXp: 1500, maxXp: 1999 },
    { id: 8, name: 'ГРАНДМАСТЕР', minXp: 2000, maxXp: 2599 },
    { id: 9, name: 'ЧЕМПИОН', minXp: 2600, maxXp: 3299 },
    { id: 10, name: 'ЮНОШЕСКИЙ РАЗРЯД', minXp: 3300, maxXp: 4199 },
    { id: 11, name: 'СПОРТИВНЫЙ РАЗРЯД', minXp: 4200, maxXp: 5299 },
    { id: 12, name: 'КАНДИДАТ В МАСТЕРЫ СПОРТА', minXp: 5300, maxXp: 6599 },
    { id: 13, name: 'МАСТЕР СПОРТА', minXp: 6600, maxXp: 8199 },
    { id: 14, name: 'МЕЖДУНАРОДНЫЙ МАСТЕР СПОРТА', minXp: 8200, maxXp: 9999 },
    { id: 15, name: 'ЗАСЛУЖЕННЫЙ МАСТЕР СПОРТА', minXp: 10000, maxXp: Infinity }
];

function getCurrentLevel(xp) {
    let currentLevel = levels[0];
    for (let i = levels.length - 1; i >= 0; i--) {
        if (xp >= levels[i].minXp) {
            currentLevel = levels[i];
            break;
        }
    }
    return currentLevel;
}

function getNextLevel(xp) {
    for (let i = 0; i < levels.length; i++) {
        if (xp < levels[i].minXp) {
            return levels[i];
        }
    }
    return null;
}

function getXpProgress(xp) {
    const current = getCurrentLevel(xp);
    const next = getNextLevel(xp);
    if (!next) return 100;
    const total = next.minXp - current.minXp;
    const earned = xp - current.minXp;
    return Math.min(100, Math.round((earned / total) * 100));
}

function calculateWorkoutXp(exercises) {
    let totalXp = 0;
    exercises.forEach(ex => {
        const sets = parseInt(ex.sets) || 0;
        const repsStr = String(ex.reps || '');
        if (repsStr.includes('сек') || repsStr.includes('с')) {
            const secs = parseFloat(repsStr.replace(/[^0-9.]/g, '')) || 0;
            totalXp += (sets * secs) / 20;
        } else {
            const reps = parseFloat(repsStr) || 0;
            totalXp += (sets * reps) / 10;
        }
    });
    return totalXp;
}

function resolveWorkoutCategory(category, parentCategory, isPremium) {
    if (!parentCategory) {
        return 'Личные';
    }

    if (parentCategory === 'Особые') {
        if (category === 'Мужская сила' || category === 'Женское счастье') {
            return 'Ягодицы';
        }
        if (category === 'Кроссфит') {
            return 'Всё тело';
        }
        return category;
    }

    if (parentCategory === 'Фитнес') {
        if (category === 'Кардио') return 'Кардио';
        if (category === 'Растяжка') return 'Гибкость';
        if (category === 'Пилатес') return 'Всё тело';
        if (category === 'Зарядка') return 'Зарядка';
        return category;
    }

    if (parentCategory === 'Силовые') {
        if (category === 'Всё тело') return 'Всё тело';
        return category;
    }

    return category;
}

// ===================FIREBASE ===================
function getFirebaseUser() {
    return new Promise((resolve) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        });
    });
}

// ===================ПРОФИЛЬ ===================
async function saveUserProfile(userId, data) {
    try {
        await firebase.firestore().collection('users').doc(userId).set(data, { merge: true });
        return { success: true };
    } catch (error) {
        console.error('Ошибка сохранения профиля:', error);
        showToast('❌ Не удалось сохранить профиль. Попробуйте позже.');
        return { success: false, error: error.message };
    }
}

async function getUserProfile(userId) {
    try {
        const doc = await firebase.firestore().collection('users').doc(userId).get();
        if (doc.exists) {
            return { success: true, data: doc.data() };
        } else {
            return { success: false, error: 'Профиль не найден' };
        }
    } catch (error) {
        console.error('Ошибка получения профиля:', error);
        showToast('❌ Не удалось загрузить профиль. Проверьте интернет.');
        return { success: false, error: error.message };
    }
}

async function updateUserProfile(userId, updates) {
    try {
        await firebase.firestore().collection('users').doc(userId).update(updates);
        return { success: true };
    } catch (error) {
        console.error('Ошибка обновления профиля:', error);
        showToast('❌ Не удалось обновить профиль. Попробуйте позже.');
        return { success: false, error: error.message };
    }
}

async function syncUserProfile() {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Пользователь не авторизован' };
    const profileResult = await getUserProfile(user.uid);
    if (!profileResult.success) {
        const newProfile = {
            displayName: user.displayName || user.email?.split('@')[0] || 'Пользователь',
            avatar: 'bodybuilding',
            level: 1,
            totalXp: 0,
            createdAt: new Date().toISOString()
        };
        await saveUserProfile(user.uid, newProfile);
        return { success: true, data: newProfile, isNew: true };
    }
    return { success: true, data: profileResult.data, isNew: false };
}

// ===================ТРЕНИРОВКИ В FIRESTORE ===================
async function saveWorkoutToFirestore(userId, workoutData) {
    try {
        const docRef = await firebase.firestore().collection('workouts').add({
            userId: userId,
            title: workoutData.title,
            date: workoutData.date || new Date().toISOString(),
            durationSeconds: workoutData.durationSeconds || 0,
            exercises: workoutData.exercises || [],
            xpEarned: workoutData.xpEarned || 0,
            category: workoutData.category || 'Без категории',
            icon: workoutData.icon || 'bodybuilding',  // ← ДОБАВИТЬ
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Ошибка сохранения тренировки:', error);
        showToast('❌ Не удалось сохранить тренировку. Проверьте интернет.');
        return { success: false, error: error.message };
    }
}

async function getUserWorkoutsFromFirestore(userId) {
    try {
        const snapshot = await firebase.firestore()
            .collection('workouts')
            .where('userId', '==', userId)
            .orderBy('date', 'desc')
            .get();
        const workouts = [];
        snapshot.forEach(doc => {
            workouts.push({ id: doc.id, ...doc.data() });
        });
        return { success: true, data: workouts };
    } catch (error) {
        console.error('Ошибка получения тренировок:', error);
        showToast('❌ Не удалось загрузить тренировки. Проверьте интернет.');
        return { success: false, error: error.message };
    }
}

async function deleteWorkoutFromFirestore(workoutId) {
    try {
        await firebase.firestore().collection('workouts').doc(workoutId).delete();
        return { success: true };
    } catch (error) {
        console.error('Ошибка удаления тренировки:', error);
        showToast('❌ Не удалось удалить тренировку. Попробуйте позже.');
        return { success: false, error: error.message };
    }
}

// ===================УПРАВЛЕНИЕ ЦВЕТОМ ===================
function setTheme(color) {
    document.body.className = 'theme-' + color;
    localStorage.setItem('themeColor', color);
    updateColorButtons(color);
    updateColorStatus(color);
}

function updateColorButtons(color) {
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.toggle('color-btn-active', btn.dataset.color === color);
    });
}

function updateColorStatus(color) {
    const colorNames = {
        'red': 'Красный', 'orange': 'Оранжевый', 'yellow': 'Желтый',
        'green': 'Зеленый', 'darkgreen': 'Темно-зеленый', 'blue': 'Голубой',
        'darkblue': 'Синий', 'purple': 'Фиолетовый', 'pink': 'Розовый', 'gray': 'Серый'
    };
    const statusEl = document.getElementById('colorStatus');
    if (statusEl) {
        statusEl.textContent = colorNames[color] || 'Красный';
    }
}

const savedColor = localStorage.getItem('themeColor') || 'red';
setTheme(savedColor);

// ===================НАВИГАЦИЯ ===================
window.navigateTo = function(page, params) {
    // Проверки на блокировки
    if (isEditingWorkout) {
        const allowedPages = ['exercise-list', 'workout-edit', 'workout-detail'];
        if (allowedPages.includes(page)) {
        } else {
            showToast('⚠️ Сначала завершите редактирование тренировки');
            return;
        }
    }
    if (isEditingProfile) {
        showToast('⚠️ Сначала завершите редактирование профиля');
        return;
    }
    const modalIds = ['exerciseModal', 'createExerciseModal', 'quickEditModal'];
    for (const id of modalIds) {
        const modal = document.getElementById(id);
        if (modal && modal.style.display === 'flex') {
            showToast('⚠️ Сначала закройте модальное окно');
            return;
        }
    }
    if (window.statsEditor && window.statsEditor.isEditing) {
        showToast('⚠️ Сначала завершите редактирование страницы статистики');
        return;
    }
    if (window.workoutsEditor && window.workoutsEditor.isEditing) {
        showToast('⚠️ Сначала завершите редактирование страницы тренировок');
        return;
    }

    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('page-active');
        p.style.display = '';
    });

    const target = document.getElementById('page-' + page);
    if (target) {
        target.classList.add('page-active');
    }

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('nav-item-active', btn.dataset.page === page);
    });

    // ===== ВЫЗОВЫ СТРАНИЦ =====
if (page === 'profile') {
    loadProfile();
    setTimeout(() => TabManager.profile(TabManager.state.profile), 300);
}
    if (page === 'level-select' && params) loadLevelSelect(params.category);
    if (page === 'workout-detail' && params) {
        loadWorkoutDetail(
            params.category,
            params.level,
            params.isCustom,
            params.id,
            params.parentCategory,
            params.isPremium
        );
    }
    if (page === 'workout-edit' && params) {
        loadEditPage(
            params.category,
            params.isCustom,
            params.id,
            params.level,
            params.exercises
        );
    }
if (page === 'workouts') {
    TabManager.workouts(TabManager.state.workouts);
    renderMyWorkouts();
}
    if (page === 'exercise-list') renderExerciseListPage();
if (page === 'stats') {
    TabManager.stats(TabManager.state.stats);
    if (TabManager.state.stats === 'world') {
        loadWorldLeaderboard();
        loadFriendsLeaderboard();
        setTimeout(applySavedWorldStatsOrder, 100);
    } else {
        loadStats();
    }
}

    if (page === 'training-session' || page === 'finish') {
        document.getElementById('bottomNav').style.display = 'none';
    } else {
        document.getElementById('bottomNav').style.display = 'block';
    }
};

document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', function() {
        const page = this.dataset.page;
        if (page) window.navigateTo(page);
    });
});

// ===================УНИВЕРСАЛЬНЫЕ ФУНКЦИИ ДЛЯ МОДАЛОК ===================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'flex';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

// ===================ГЛОБАЛЬНАЯ ФУНКЦИЯ ДЛЯ ПЕРЕКЛЮЧЕНИЯ ВКЛАДОК СТАТИСТИКИ ===================
window.switchStatsTab = function(tab) {
    const activeTab = document.querySelector('#page-stats .tab-btn.tab-btn-active');
    if (activeTab && activeTab.dataset.tab === tab) {
        return;
    }
    
    applyStatsTab(tab);
    if (tab === 'world') {
        loadWorldLeaderboard();
        loadFriendsLeaderboard();
        setTimeout(applySavedWorldStatsOrder, 100);
    } else if (tab === 'personal') {
        loadStats();
    }
};

// ===================КАТЕГОРИИ ТРЕНИРОВОК ===================
document.querySelectorAll('.item-card:not([data-premium="true"])').forEach(card => {
    card.addEventListener('click', function() {
        const name = this.dataset.category;
        if (name) {
            window.navigateTo('level-select', { category: name });
        }
    });
});

// ===================СТРАНИЦА ВЫБОРА УРОВНЯ ===================
function loadLevelSelect(category) {
    let parentCategory = null;
    for (const parent in exercisesData) {
        if (exercisesData[parent] && exercisesData[parent][category]) {
            parentCategory = parent;
            break;
        }
    }
    if (parentCategory === 'Особые') {
        if (!hasPremium()) {
            openModal('premiumModal');
            window.navigateTo('workouts');
            return;
        }
    }
    const titleEl = document.getElementById('levelSelectTitle');
    if (titleEl) titleEl.textContent = 'ТРЕНИРОВКА';
    let isPremium = false;
    if (parentCategory && exercisesData[parentCategory] && exercisesData[parentCategory][category]) {
        isPremium = exercisesData[parentCategory][category]._premium || false;
    }
    const levelsArr = ['1 LVL', '2 LVL', '3 LVL'];
    const levelDescs = ['Начинающий', 'Любитель', 'Профессионал'];
const CATEGORY_ICON_MAP = {
    'Руки': 'bodybuilding',
    'Плечи': 'shoulder',
    'Пресс': 'press',
    'Грудь': 'breast',
    'Спина': 'back',
    'Ноги': 'legs',
    'Всё тело': 'WholeBody',
    'Кардио': 'cardio',
    'Растяжка': 'stretching',
    'Зарядка': 'charging',
    'Пилатес': 'Pilates',
    'Кроссфит': 'crossfit',
    'Мужская сила': 'men',
    'Женское счастье': 'woman'
};
const icon = CATEGORY_ICON_MAP[category] || 'bodybuilding';

    const container = document.getElementById('levelsContainer');

    container.innerHTML = levelsArr.map((level, index) => {
        let exercises = [];
        let displayName = category + ' ' + level;

        let levelData = null;
        if (parentCategory && exercisesData[parentCategory] && exercisesData[parentCategory][category]) {
            levelData = exercisesData[parentCategory][category][level];
        } else if (exercisesData[category] && exercisesData[category][level]) {
            levelData = exercisesData[category][level];
        } else {
            for (const parent in exercisesData) {
                if (exercisesData[parent] && exercisesData[parent][category]) {
                    levelData = exercisesData[parent][category][level];
                    if (levelData) break;
                }
            }
        }

        if (levelData) {
            if (Array.isArray(levelData)) {
                exercises = levelData;
            } else if (typeof levelData === 'object' && levelData._exercises) {
                exercises = levelData._exercises;
                displayName = levelData._title || displayName;
            }
        }

        const count = exercises.length;
        return `
            <div class="item-card" onclick="window.navigateTo('workout-detail', {
                category: '${category}',
                level: '${level}',
                parentCategory: '${parentCategory || ''}',
                isPremium: ${isPremium}
            })">
                <div class="item-icon"><img src="images/${icon}.png"></div>
                <div class="item-info">
                    <h3 class="item-title">${displayName}</h3>
                    <p class="item-desc">${levelDescs[index]} · ${count} упражнений</p>
                </div>
                <button class="item-action"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        `;
    }).join('');
}

// ===================СТРАНИЦА ДЕТАЛЕЙ ТРЕНИРОВКИ ===================
let currentCategory = '';
let currentLevel = '1 LVL';
let currentIsCustom = false;
let currentWorkoutId = null;

let _quickEditIndex = null;
let _quickEditExercises = null;
let _quickEditIsCustom = false;
let _quickEditCategory = '';
let _quickEditLevel = '';
let _quickEditParentCategory = '';
let _quickEditWorkoutId = null;

function loadWorkoutDetail(category, level, isCustom, id, parentCategory, isPremium) {
    let isPremiumWorkout = false;
    if (isPremium === true) isPremiumWorkout = true;
    if (parentCategory === 'Особые') isPremiumWorkout = true;
    if (!isPremiumWorkout) {
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category] && exercisesData[parent][category]._premium === true) {
                isPremiumWorkout = true;
                break;
            }
        }
    }
    if (isPremiumWorkout && !hasPremium()) {
        setTimeout(() => {
            openModal('premiumModal');
            window.navigateTo('workouts');
        }, 100);
        return;
    }
    currentCategory = category;
    currentLevel = level || '1 LVL';
    currentIsCustom = isCustom || false;
    currentWorkoutId = id || null;

    window._currentIsPremium = isPremiumWorkout;

    _quickEditCategory = category;
    _quickEditLevel = currentLevel;
    _quickEditIsCustom = isCustom;
    _quickEditParentCategory = parentCategory || '';
    _quickEditWorkoutId = id || null;

    let exercises = [];
    let displayTitle = '';
    let workoutIcon = 'bodybuilding';

    if (isCustom && id) {
        const workout = getWorkoutById(id);
        if (workout) {
            exercises = workout.exercises || [];
            displayTitle = workout.title;
            currentCategory = workout.title;
            workoutIcon = workout.icon || 'bodybuilding';
        }
    } else {
        let found = false;
        let savedTitle = '';
        let levelData = null;
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category]) {
                levelData = exercisesData[parent][category][currentLevel];
                if (levelData) break;
            }
        }
        if (!levelData && exercisesData[category] && exercisesData[category][currentLevel]) {
            levelData = exercisesData[category][currentLevel];
        }

        if (levelData) {
            if (typeof levelData === 'object' && !Array.isArray(levelData)) {
                if (levelData._exercises) {
                    exercises = levelData._exercises;
                    found = true;
                }
                if (levelData._title) {
                    savedTitle = levelData._title;
                }
            } else if (Array.isArray(levelData) && levelData.length > 0) {
                exercises = levelData;
                found = true;
            }
        }

        if (!found) {
            for (const parent in exercisesData) {
                if (exercisesData[parent] && exercisesData[parent][category]) {
                    const levelsArr = ['1 LVL', '2 LVL', '3 LVL'];
                    for (const lvl of levelsArr) {
                        const data = exercisesData[parent][category][lvl];
                        if (data) {
                            if (typeof data === 'object' && !Array.isArray(data) && data._exercises) {
                                exercises = data._exercises;
                                if (data._title) savedTitle = data._title;
                            } else if (Array.isArray(data) && data.length > 0) {
                                exercises = data;
                            }
                            if (exercises.length > 0) {
                                found = true;
                                break;
                            }
                        }
                    }
                    if (found) break;
                }
            }
        }

        if (savedTitle) {
            displayTitle = savedTitle;
        } else {
            displayTitle = category + ' ' + (level || '1 LVL');
        }

        const CATEGORY_ICON_MAP = {
            'Руки': 'bodybuilding',
            'Плечи': 'shoulder',
            'Пресс': 'press',
            'Грудь': 'breast',
            'Спина': 'back',
            'Ноги': 'legs',
            'Всё тело': 'WholeBody',
            'Кардио': 'cardio',
            'Растяжка': 'stretching',
            'Зарядка': 'charging',
            'Пилатес': 'Pilates',
            'Кроссфит': 'crossfit',
            'Мужская сила': 'men',
            'Женское счастье': 'woman'
        };
        workoutIcon = CATEGORY_ICON_MAP[category] || 'bodybuilding';
    }

    _quickEditExercises = exercises;

    // Сохраняем тренировку для приглашения (ДО того как используем displayTitle)
    window._currentWorkoutForInvite = {
        title: displayTitle,
        exercises: exercises
    };

    const titleEl = document.getElementById('workoutDetailTitle');
    if (titleEl) {
        titleEl.textContent = 'ТРЕНИРОВКА';
    }

    const container = document.getElementById('exercisesContainer');
    if (container) {
        if (exercises.length === 0) {
            container.innerHTML = `<div class="empty-state" style="padding:1.5rem; margin-top:0;"><p style="color:var(--slate);">Упражнения не найдены</p></div>`;
        } else {
            container.innerHTML = exercises.map((ex, index) => {
                const icon = ex.icon || getExerciseIcon(ex.name);
                return `
                    <div class="item-card" id="exercise-${index}">
                        <div class="exercise-status" id="status-${index}">
                            <span class="exercise-number" id="number-${index}">${index + 1}</span>
                        </div>
                        <div class="item-info" style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem; flex:1; min-width:0;">
                            <div style="flex:1; min-width:0;">
                                <h3 class="item-title">${ex.name}</h3>
                                <p class="item-desc">${formatSets(ex.sets)} × ${formatReps(ex.reps)}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    const editWorkoutBtn = document.getElementById('editWorkoutBtn');
    const workoutEditEnabled = localStorage.getItem(EDIT_WORKOUT_KEY) !== 'false';

    if (editWorkoutBtn) {
        if (isPremiumWorkout || !workoutEditEnabled) {
            editWorkoutBtn.style.display = 'none';
        } else {
            editWorkoutBtn.style.display = 'block';
            editWorkoutBtn.onclick = function() {
                const params = { category: currentCategory, isCustom: currentIsCustom, id: currentWorkoutId };
                if (!currentIsCustom && currentLevel) params.level = currentLevel;
                if (parentCategory) params.parentCategory = parentCategory;
                window.navigateTo('workout-edit', params);
            };
        }
    }

    const actionButton = document.getElementById('actionButton');
    if (actionButton) {
        actionButton.textContent = 'Начать тренировку';
        actionButton.onclick = function() {
            if (!preventDoubleClick('startWorkoutBtn', 3000)) {
                showToast('⏳ Подождите, тренировка уже запускается...');
                return;
            }
            
            let sessionExercises = [];
            let finalWorkoutIcon = workoutIcon;
            
            if (currentIsCustom && currentWorkoutId) {
                const workout = getWorkoutById(currentWorkoutId);
                if (workout) {
                    sessionExercises = workout.exercises || [];
                    finalWorkoutIcon = workout.icon || 'bodybuilding';
                }
            } else {
                sessionExercises = exercises;
            }

            if (sessionExercises.length === 0) {
                showToast('⚠️ Нет упражнений для тренировки');
                return;
            }

            let resolvedCategory = 'Без категории';
            if (currentIsCustom && currentWorkoutId) {
                resolvedCategory = ICON_TO_CATEGORY[finalWorkoutIcon] || 'Всё тело';
            } else {
                let parent = parentCategory || '';
                if (!parent) {
                    for (const p in exercisesData) {
                        if (exercisesData[p] && exercisesData[p][currentCategory]) {
                            parent = p;
                            break;
                        }
                    }
                }
                resolvedCategory = resolveWorkoutCategory(currentCategory, parent, isPremiumWorkout);
            }

            const cleanTitle = currentCategory + ' ' + currentLevel;
            startTrainingSession(sessionExercises, cleanTitle, resolvedCategory, finalWorkoutIcon);
        };
    }

    // Настраиваем кнопку "Совместная тренировка" (уже есть в HTML)
    const inviteBtn = document.getElementById('coopInviteBtn');
    if (inviteBtn) {
        inviteBtn.onclick = function() {
            getFriendsList().then(result => {
                if (!result.success || result.data.length === 0) {
                    showToast('⚠️ Сначала добавьте друзей в профиле');
                    TabManager.profile('friends');
                    return;
                }
                showFriendSelectModal(result.data);
            });
        };
        // Если нужно скрыть для премиум-тренировок или по другим условиям:
        // inviteBtn.style.display = (isPremiumWorkout) ? 'none' : 'block';
    }
    
    // Вставляем кнопку после actionButton
    if (actionButton) {
        actionButton.parentNode.insertBefore(inviteBtn, actionButton.nextSibling);
    }
}

// ===================СТРАНИЦА ТРЕНИРОВКИ СЕССИЯ ===================
let sessionExercises = [];
let sessionCurrentIndex = 0;
let sessionCompleted = new Set();
let sessionTimerInterval = null;
let sessionSeconds = 0;
let sessionWorkoutTitle = '';
let sessionCategory = '';
let sessionWorkoutIcon = 'bodybuilding'; // ← ДОБАВИТЬ

function startTrainingSession(exercises, title, category, workoutIcon) {
    if (!exercises || exercises.length === 0) {
        showToast('⚠️ Нет упражнений для тренировки');
        return;
    }
    // Добавляем иконки к каждому упражнению
    sessionExercises = exercises.map(ex => ({
        ...ex,
        icon: ex.icon || getExerciseIcon(ex.name)
    }));
    sessionCurrentIndex = 0;
    sessionCompleted = new Set();
    sessionSeconds = 0;
    sessionWorkoutTitle = title;
    sessionCategory = category || 'Без категории';
    sessionWorkoutIcon = workoutIcon || 'bodybuilding'; // ← СОХРАНЯЕМ ИКОНКУ ТРЕНИРОВКИ

    closeModal('sessionExitModal');
    window.navigateTo('training-session');

    renderSessionExercise();
    renderSessionProgress();
    updateSessionButtons();
    startSessionTimer();
}

function renderSessionExercise() {
    const ex = sessionExercises[sessionCurrentIndex];
    if (!ex) return;

    document.getElementById('sessionExerciseName').textContent = ex.name;

    const repsStr = String(ex.reps || '');
    const isSeconds = repsStr.includes('сек') || repsStr.includes('с');
    const repsValue = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 0;

    let details = '';
    if (isSeconds) {
        const mins = String(Math.floor(repsValue / 60)).padStart(2, '0');
        const secs = String(repsValue % 60).padStart(2, '0');
        details = `${mins}:${secs}`;
    } else {
        details = `${ex.sets} × ${repsValue}`;
    }

    document.getElementById('sessionExerciseDetails').textContent = details;
}

function renderSessionProgress() {
    const container = document.getElementById('sessionProgress');
    const total = sessionExercises.length;
    const current = sessionCurrentIndex + 1;

    container.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const dash = document.createElement('div');
        dash.className = 'progress-dash';
        if (i < current) {
            dash.classList.add('progress-dash-active');
        }
        container.appendChild(dash);
    }
}

function updateSessionButtons() {
    const total = sessionExercises.length;
    const isFirst = sessionCurrentIndex === 0;
    const isLast = sessionCurrentIndex === total - 1;

    const prevBtn = document.getElementById('sessionPrevBtn');
    const nextBtn = document.getElementById('sessionNextBtn');
    const mainBtn = document.getElementById('sessionMainBtn');

    if (isFirst) {
        prevBtn.style.visibility = 'visible';
        prevBtn.style.pointerEvents = 'none';
        prevBtn.style.opacity = '0.3';
    } else {
        prevBtn.style.visibility = 'visible';
        prevBtn.style.pointerEvents = 'auto';
        prevBtn.style.opacity = '1';
    }

    if (isLast) {
        nextBtn.style.visibility = 'visible';
        nextBtn.style.pointerEvents = 'none';
        nextBtn.style.opacity = '0.3';
        mainBtn.textContent = 'ФИНИШ';
    } else {
        nextBtn.style.visibility = 'visible';
        nextBtn.style.pointerEvents = 'auto';
        nextBtn.style.opacity = '1';
        mainBtn.textContent = 'ГОТОВО';
    }
}

function goToPrevExercise() {
    if (sessionCurrentIndex > 0) {
        sessionCurrentIndex--;
        renderSessionExercise();
        renderSessionProgress();
        updateSessionButtons();
    }
}

function goToNextExercise() {
    if (sessionCurrentIndex < sessionExercises.length - 1) {
        sessionCurrentIndex++;
        renderSessionExercise();
        renderSessionProgress();
        updateSessionButtons();
    }
}

function markCurrentComplete() {
    sessionCompleted.add(sessionCurrentIndex);

    const isLast = sessionCurrentIndex === sessionExercises.length - 1;

    if (isLast) {
        finishTrainingSession();
    } else {
        goToNextExercise();
    }
}

function finishTrainingSession() {
    stopSessionTimer();
    const total = sessionExercises.length;
    const completed = sessionCompleted.size;
    const completedExercises = sessionExercises.filter((_, index) => sessionCompleted.has(index));
    const xpEarned = calculateWorkoutXp(completedExercises);
    showFinishPage(total, completed, sessionSeconds, xpEarned);
}

// ===================ТАЙМЕР ===================
function startSessionTimer() {
    if (sessionTimerInterval) return;
    sessionTimerInterval = setInterval(() => {
        sessionSeconds++;
        updateSessionTimerDisplay();
    }, 1000);
}

function stopSessionTimer() {
    if (sessionTimerInterval) {
        clearInterval(sessionTimerInterval);
        sessionTimerInterval = null;
    }
}

function updateSessionTimerDisplay() {
    const mins = String(Math.floor(sessionSeconds / 60)).padStart(2, '0');
    const secs = String(sessionSeconds % 60).padStart(2, '0');
    document.getElementById('sessionTimer').textContent = `${mins}:${secs}`;
}

// ===================КНОПКИ СЕССИИ ===================
document.getElementById('sessionPrevBtn')?.addEventListener('click', goToPrevExercise);
document.getElementById('sessionNextBtn')?.addEventListener('click', goToNextExercise);
document.getElementById('sessionMainBtn')?.addEventListener('click', markCurrentComplete);

// ===================КРЕСТИК СЕССИИ ===================
document.getElementById('sessionCloseBtn')?.addEventListener('click', function() {
    const total = sessionExercises.length;
    const completed = sessionCompleted.size;
    const mins = String(Math.floor(sessionSeconds / 60)).padStart(2, '0');
    const secs = String(sessionSeconds % 60).padStart(2, '0');
    
    const completedExercises = sessionExercises.filter((_, index) => sessionCompleted.has(index));
    const xpEarned = calculateWorkoutXp(completedExercises);

    document.getElementById('sessionExitTitle').textContent = sessionWorkoutTitle;
    document.getElementById('exitExercises').textContent = `${completed}/${total}`;
    document.getElementById('exitMinutes').textContent = `${mins}:${secs}`;
    document.getElementById('exitXp').textContent = `+${Math.round(xpEarned)} XP`;
    openModal('sessionExitModal');
});

document.getElementById('exitContinueBtn')?.addEventListener('click', function() {
    closeModal('sessionExitModal');
});

document.getElementById('exitFinishBtn')?.addEventListener('click', function() {
    closeModal('sessionExitModal');
    stopSessionTimer();
    showToast('💾 Тренировка сохранена');
    finishTrainingSession();
});

// ===================БЫСТРОЕ РЕДАКТИРОВАНИЕ УПРАЖНЕНИЯ ===================
function openQuickEditModal(index) {
    _quickEditIndex = index;

    const ex = _quickEditExercises[index];
    if (!ex) return;

    document.getElementById('quickEditSets').value = ex.sets || 3;

    const repsStr = String(ex.reps || '');
    const isSeconds = repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд');
    let repsValue = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 12;
    if (isNaN(repsValue) || repsValue < 2) repsValue = 12;
    if (repsValue > 60) repsValue = 60;
    document.getElementById('quickEditReps').value = repsValue;

    const label = document.getElementById('quickEditRepsLabel');
    if (label) label.textContent = isSeconds ? 'Секунды' : 'Повторения';

    document.querySelectorAll('#quickEditModal input').forEach(inp => {
        inp.classList.remove('error');
    });

    openModal('quickEditModal');
}

document.getElementById('quickEditSaveBtn')?.addEventListener('click', function() {
    if (_quickEditIndex === null || !_quickEditExercises) {
        showToast('⚠️ Ошибка: упражнение не найдено');
        return;
    }

    const sets = document.getElementById('quickEditSets').value.trim();
    const reps = document.getElementById('quickEditReps').value.trim();
    const setsInput = document.getElementById('quickEditSets');
    const repsInput = document.getElementById('quickEditReps');

    [setsInput, repsInput].forEach(inp => inp.classList.remove('error'));
    let hasError = false;
    let errorMessage = '';

    if (!sets || parseInt(sets) < 1 || parseInt(sets) > 5) {
        setsInput.classList.add('error');
        hasError = true;
        errorMessage = 'Подходы должны быть от 1 до 5';
    }
    if (!reps || parseInt(reps) < 2 || parseInt(reps) > 60) {
        repsInput.classList.add('error');
        hasError = true;
        if (!errorMessage) errorMessage = 'Повторения должны быть от 2 до 60';
    }
    if (hasError) {
        showToast('⚠️ ' + errorMessage);
        return;
    }

    const label = document.getElementById('quickEditRepsLabel');
    const isSeconds = label ? label.textContent === 'Секунды' : false;
    const repsDisplay = isSeconds ? `${reps} секунд` : `${reps}`;

    _quickEditExercises[_quickEditIndex] = {
        ..._quickEditExercises[_quickEditIndex],
        sets: parseInt(sets),
        reps: repsDisplay
    };

    if (_quickEditIsCustom) {
        const allWorkouts = getMyWorkouts();
        const index = allWorkouts.findIndex(w => w._id === _quickEditWorkoutId);
        if (index !== -1) {
            allWorkouts[index].exercises = _quickEditExercises;
            saveMyWorkouts(allWorkouts);
        }
    } else {
        let saved = false;
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][_quickEditCategory]) {
                const levelData = exercisesData[parent][_quickEditCategory][_quickEditLevel];
                if (levelData) {
                    if (typeof levelData === 'object' && !Array.isArray(levelData) && levelData._exercises) {
                        levelData._exercises = _quickEditExercises;
                    } else if (Array.isArray(levelData)) {
                        exercisesData[parent][_quickEditCategory][_quickEditLevel] = _quickEditExercises;
                    }
                    saved = true;
                    break;
                }
            }
        }
        if (saved) saveExercisesData();
    }

    closeModal('quickEditModal');
    const editedIndex = _quickEditIndex;
    _quickEditIndex = null;

    const infoDiv = document.querySelector(`#exercise-${editedIndex} .item-info`);
    if (infoDiv) {
        const p = infoDiv.querySelector('.item-desc');
        if (p) {
            p.textContent = `${formatSets(sets)} × ${formatReps(repsDisplay)}`;
        }
    }

    showToast('✅ Упражнение обновлено');
});

document.getElementById('quickEditCancelBtn')?.addEventListener('click', function() {
    closeModal('quickEditModal');
    _quickEditIndex = null;
});

// ===================ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ РЕДАКТИРОВАНИЯ ===================
function getExercisesForEdit(category, level, isCustom, id) {
    if (isCustom && id && id !== 'new') {
        const workout = getWorkoutById(id);
        if (workout) return JSON.parse(JSON.stringify(workout.exercises || []));
        return [];
    }
    if (!isCustom) {
        const targetLevel = level || '1 LVL';
        let exercisesFound = [];
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category]) {
                const levelData = exercisesData[parent][category][targetLevel];
                if (levelData) {
                    if (Array.isArray(levelData)) {
                        exercisesFound = levelData;
                    } else if (typeof levelData === 'object' && levelData._exercises) {
                        exercisesFound = levelData._exercises;
                    }
                    break;
                }
            }
        }
        if (exercisesFound.length === 0 && exercisesData[category] && exercisesData[category][targetLevel]) {
            const levelData = exercisesData[category][targetLevel];
            if (Array.isArray(levelData)) {
                exercisesFound = levelData;
            } else if (typeof levelData === 'object' && levelData._exercises) {
                exercisesFound = levelData._exercises;
            }
        }
        return JSON.parse(JSON.stringify(exercisesFound));
    }
    return [];
}

function saveWorkoutData(category, level, isCustom, id, title, icon, exercises) {
    if (isCustom || id === 'new') {
        const allWorkouts = getMyWorkouts();
        const isDuplicate = allWorkouts.some(w => w._id !== id && w.title.toLowerCase() === title.toLowerCase());
        if (isDuplicate) {
            showConfirmModal(
                'Тренировка с таким названием уже существует',
                'Сохранить с дубликатом?',
                function() {},
                'Да, сохранить'
            );
        }
        if (id === 'new') {
            const newWorkout = {
                _id: Date.now().toString(),
                title: title,
                icon: icon,
                exercises: exercises
            };
            const workouts = getMyWorkouts();
            workouts.push(newWorkout);
            saveMyWorkouts(workouts);
            return true;
        } else {
            updateWorkout(id, { title: title, icon: icon, exercises: exercises });
            return true;
        }
    } else {
        const targetLevel = level || '1 LVL';
        let saved = false;
        for (const parent in exercisesData) {
            if (exercisesData[parent] && exercisesData[parent][category]) {
                if (exercisesData[parent][category][targetLevel]) {
                    if (Array.isArray(exercisesData[parent][category][targetLevel])) {
                        exercisesData[parent][category][targetLevel] = {
                            _title: title,
                            _exercises: JSON.parse(JSON.stringify(exercises))
                        };
                    } else {
                        exercisesData[parent][category][targetLevel]._title = title;
                        exercisesData[parent][category][targetLevel]._exercises = JSON.parse(JSON.stringify(exercises));
                    }
                    saved = true;
                    break;
                }
            }
        }
        if (!saved) {
            if (exercisesData[category] && exercisesData[category][targetLevel]) {
                if (Array.isArray(exercisesData[category][targetLevel])) {
                    exercisesData[category][targetLevel] = {
                        _title: title,
                        _exercises: JSON.parse(JSON.stringify(exercises))
                    };
                } else {
                    exercisesData[category][targetLevel]._title = title;
                    exercisesData[category][targetLevel]._exercises = JSON.parse(JSON.stringify(exercises));
                }
                saved = true;
            }
        }
        if (saved) {
            saveExercisesData();
            return true;
        }
        showToast('❌ Ошибка: категория "' + category + '" не найдена');
        return false;
    }
}

// ===================СТРАНИЦА РЕДАКТИРОВАНИЯ ТРЕНИРОВКИ ===================
let editExercises = [];
let editWorkoutId = null;
let editIsCustom = false;
let editCategory = '';
let editingExerciseIndex = null;
let editLevel = '1 LVL';

function loadEditPage(category, isCustom, id, level, exercises) {
    isEditingWorkout = true;
    editCategory = category;
    editIsCustom = isCustom;
    editWorkoutId = id;
    editLevel = level || '1 LVL';

    // ===== ПОКАЗЫВАЕМ БЛОК ВЫБОРА ЗНАЧКА ТОЛЬКО ДЛЯ ЛИЧНЫХ ТРЕНИРОВОК =====
    const iconPickerBlock = document.getElementById('iconPickerBlock');
    if (iconPickerBlock) {
        if (isCustom || id === 'new') {
            iconPickerBlock.style.display = 'block';
            // Устанавливаем значок по умолчанию
            const defaultIcon = ['bodybuilding', 'press', 'breast', 'back', 'legs', 'shoulder', 'cardio', 'stretching', 'WholeBody', 'charging', 'Pilates'].includes(category) ? category : 'bodybuilding';
            document.querySelectorAll('#createExerciseIconPicker .icon-option').forEach(el => {
                el.classList.toggle('icon-option-active', el.dataset.icon === defaultIcon);
            });
        } else {
            iconPickerBlock.style.display = 'none';
        }
    }

    let savedName = null;
    if (isCustom || id === 'new') {
        savedName = localStorage.getItem('temp_edit_name');
    } else {
        localStorage.removeItem('temp_edit_name');
        localStorage.removeItem('temp_edit_exercises');
        localStorage.removeItem('temp_edit_category');
        localStorage.removeItem('temp_edit_level');
        localStorage.removeItem('temp_edit_isCustom');
        localStorage.removeItem('temp_edit_id');
    }

    if (!exercises || exercises.length === 0) {
        if (isCustom || id === 'new') {
            const saved = localStorage.getItem('temp_edit_exercises');
            if (saved) {
                const parsed = JSON.parse(saved);
                const savedCategory = localStorage.getItem('temp_edit_category');
                const savedLevel = localStorage.getItem('temp_edit_level');
                if (savedCategory === category && savedLevel === level) {
                    exercises = parsed;
                }
            }
        }
    }

    const titleEl = document.getElementById('editTitle');
    if (titleEl) {
        titleEl.textContent = (id === 'new') ? 'СОЗДАНИЕ ТРЕНИРОВКИ' : 'РЕДАКТИРОВАТЬ';
    }
    const resetBtn = document.getElementById('resetWorkoutBtn');
    if (resetBtn) resetBtn.style.display = (isCustom || id === 'new') ? 'none' : 'block';

    const iconPicker = document.querySelector('.edit-header-block .icon-picker');
    const iconPickerLabel = document.querySelector('.edit-header-block label[for="iconPicker"]');
    if (iconPicker) {
        if (isCustom || id === 'new') {
            iconPicker.style.display = 'flex';
            if (iconPickerLabel) iconPickerLabel.style.display = 'block';
        } else {
            iconPicker.style.display = 'none';
            if (iconPickerLabel) iconPickerLabel.style.display = 'none';
        }
    }

    const nameInput = document.getElementById('editWorkoutName');
    if (nameInput) {
        if (savedName) {
            nameInput.value = savedName;
        } else if (isCustom && id && id !== 'new') {
            const workout = getWorkoutById(id);
            if (workout) nameInput.value = workout.title || category;
        } else if (!isCustom) {
            let savedTitle = '';
            for (const parent in exercisesData) {
                if (exercisesData[parent] && exercisesData[parent][category]) {
                    const levelData = exercisesData[parent][category][editLevel];
                    if (levelData && levelData._title) {
                        savedTitle = levelData._title;
                        break;
                    }
                }
            }
            if (!savedTitle && exercisesData[category] && exercisesData[category][editLevel] && exercisesData[category][editLevel]._title) {
                savedTitle = exercisesData[category][editLevel]._title;
            }
            nameInput.value = savedTitle || (category + ' ' + editLevel);
        } else {
            const workouts = getMyWorkouts();
            nameInput.value = 'Тренировка №' + (workouts.length + 1);
        }
    }

    if (exercises && exercises.length > 0) {
        editExercises = exercises;
    } else {
        editExercises = getExercisesForEdit(category, editLevel, isCustom, id);
    }

    if (isCustom || id === 'new') {
        const defaultIcon = ['bodybuilding', 'press', 'breast', 'back', 'legs', 'shoulder', 'cardio', 'stretching', 'WholeBody', 'charging', 'Pilates'].includes(category) ? category : 'bodybuilding';
        document.querySelectorAll('.icon-option').forEach(el => {
            el.classList.toggle('icon-option-active', el.dataset.icon === defaultIcon);
        });
    }
    setTimeout(() => renderEditExercises(), 300);
}

// ===================ВЫБОР ЗНАЧКА ===================
document.querySelectorAll('.icon-option').forEach(el => {
    el.addEventListener('click', function() {
        document.querySelectorAll('.icon-option').forEach(e => e.classList.remove('icon-option-active'));
        this.classList.add('icon-option-active');
    });
});

// ===================РЕНДЕР УПРАЖНЕНИЙ В РЕДАКТИРОВАНИИ ===================
function renderEditExercises() {
    const container = document.getElementById('editExercisesContainer');
    if (!container) return;
    const maxExercises = getMaxExercisesForLevel(editLevel, editIsCustom);
    const currentCount = editExercises.length;
    let headerHtml = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0rem; padding:0 0.2rem;">
            <span style="font-weight:600; font-size:1rem; color:var(--dark);">Упражнения</span>
            <span style="font-weight:500; font-size:0.9rem; color:var(--slate);">${currentCount}/${maxExercises}</span>
        </div>
    `;
    if (editExercises.length === 0) {
        container.innerHTML = headerHtml + `<div class="empty-state" style="padding:1.5rem;"><p style="color:var(--slate);">Нет упражнений</p></div>`;
        return;
    }
    let trainingIcon = 'bodybuilding';
    if (editIsCustom || editWorkoutId === 'new') {
        const selectedIcon = document.querySelector('.icon-option-active');
        if (selectedIcon) trainingIcon = selectedIcon.dataset.icon;
    } else {
        const iconMap = {
            'Руки': 'bodybuilding', 'Плечи': 'shoulder', 'Пресс': 'press',
            'Грудь': 'breast', 'Спина': 'back', 'Ноги': 'legs',
            'Всё тело': 'WholeBody', 'Кардио': 'cardio', 'Растяжка': 'stretching',
            'Зарядка': 'charging', 'Пилатес': 'Pilates'
        };
        trainingIcon = iconMap[editCategory] || 'bodybuilding';
    }
    const exercisesHtml = editExercises.map((ex, index) => {
        const icon = ex.icon || getExerciseIcon(ex.name);
        return `
            <div class="edit-exercise-item" data-index="${index}" draggable="true">
                <div class="edit-drag-handle"><span>☰</span></div>
                <div class="item-icon" style="width:44px;height:44px;min-width:44px;background:var(--accent-light);border-radius:10px;display:flex;align-items:center;justify-content:center;">
                    <img src="images/${icon}.png" style="width:28px;height:28px;object-fit:contain;">
                </div>
                <div class="edit-exercise-info">
                    <h4 class="edit-exercise-name">${ex.name}</h4>
                    <p class="edit-exercise-details">${formatSets(ex.sets)} × ${formatReps(ex.reps)}</p>
                </div>
                <div class="edit-exercise-actions">
                    <button class="edit-btn" onclick="openExerciseModal(${index})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="delete-btn" onclick="removeEditExercise(${index})"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
        `;
    }).join('');
    container.innerHTML = headerHtml + exercisesHtml;
    setupDragDrop();
}

// ===================DRAG & DROP ===================
let dragStartIndex = null;

function setupDragDrop() {
    const items = document.querySelectorAll('.edit-exercise-item');
    items.forEach((item, index) => {
        item.draggable = true;
        item.dataset.index = index;
        item.addEventListener('dragstart', function(e) {
            dragStartIndex = parseInt(this.dataset.index);
            this.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        });
        item.addEventListener('dragend', function(e) {
            this.classList.remove('dragging');
            document.querySelectorAll('.edit-exercise-item').forEach(el => el.classList.remove('drag-over'));
        });
        item.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('drag-over');
        });
        item.addEventListener('dragleave', function(e) {
            this.classList.remove('drag-over');
        });
        item.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');
            const dropIndex = parseInt(this.dataset.index);
            if (dragStartIndex !== null && dragStartIndex !== dropIndex) {
                const [removed] = editExercises.splice(dragStartIndex, 1);
                editExercises.splice(dropIndex, 0, removed);
                renderEditExercises();
                setupDragDrop();
            }
            dragStartIndex = null;
        });
    });
}

// ===================УПРАВЛЕНИЕ УПРАЖНЕНИЯМИ В РЕДАКТИРОВАНИИ ===================
window.addEditExercise = function() {
    editExercises.push({ name: 'Новое упражнение', sets: 3, reps: 12 });
    renderEditExercises();
    openExerciseModal(editExercises.length - 1);
};

window.removeEditExercise = function(index) {
    showConfirmModal(
        'Удалить упражнение?',
        'Это действие нельзя отменить.',
        function() {
            editExercises.splice(index, 1);
            renderEditExercises();
            showToast('🗑️ Упражнение удалено');
        },
        'Удалить'
    );
};

// ===================МОДАЛЬНОЕ ОКНО РЕДАКТИРОВАНИЯ УПРАЖНЕНИЯ ===================
window.openExerciseModal = function(index) {
    closeModal('addExerciseModal');
    closeModal('createExerciseModal');
    if (index !== undefined && index !== null && editExercises[index]) {
        const ex = editExercises[index];
        window._editOriginalData = { name: ex.name, sets: ex.sets, reps: ex.reps };
    } else {
        window._editOriginalData = null;
    }
    if (index === undefined || index === null || index === editExercises.length) {
        const maxExercises = getMaxExercisesForLevel(editLevel, editIsCustom);
        if (editExercises.length >= maxExercises) {
            showToast(`⚠️ Вы достигли максимума упражнений в этой категории (${maxExercises})`);
            return;
        }
        editingExerciseIndex = editExercises.length;
        editExercises.push({ name: 'Новое упражнение', sets: 3, reps: 12 });
        renderEditExercises();
        index = editingExerciseIndex;
    } else if (!editExercises[index]) {
        const maxExercises = getMaxExercisesForLevel(editLevel, editIsCustom);
        if (editExercises.length >= maxExercises) {
            showToast(`⚠️ Вы достигли максимума упражнений в этой категории (${maxExercises})`);
            return;
        }
        editingExerciseIndex = editExercises.length;
        editExercises.push({ name: 'Новое упражнение', sets: 3, reps: 12 });
        renderEditExercises();
        index = editingExerciseIndex;
    } else {
        editingExerciseIndex = index;
    }
    const ex = editExercises[editingExerciseIndex];
    if (!ex) return;
    document.getElementById('modalExerciseName').value = ex.name || '';
    document.getElementById('modalExerciseSets').value = ex.sets || 3;
    const repsStr = String(ex.reps || '');
    const isSeconds = repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд');
    let repsValue = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 12;
    if (isNaN(repsValue) || repsValue < 2) repsValue = 12;
    if (repsValue > 60) repsValue = 60;
    document.getElementById('modalExerciseReps').value = repsValue;
    const label = document.querySelector('#exerciseModal .form-group label[for="modalExerciseReps"]');
    if (label) label.textContent = isSeconds ? 'Секунды' : 'Повторения';
    document.getElementById('exerciseModal').dataset.isSeconds = isSeconds ? 'true' : 'false';
    document.querySelectorAll('#exerciseModal input').forEach(inp => {
        inp.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });
    openModal('exerciseModal');
};

document.getElementById('modalSaveBtn')?.addEventListener('click', function() {
    if (editingExerciseIndex === null) return;
    const name = document.getElementById('modalExerciseName').value.trim();
    const sets = document.getElementById('modalExerciseSets').value.trim();
    const reps = document.getElementById('modalExerciseReps').value.trim();
    const nameInput = document.getElementById('modalExerciseName');
    const setsInput = document.getElementById('modalExerciseSets');
    const repsInput = document.getElementById('modalExerciseReps');
    [nameInput, setsInput, repsInput].forEach(inp => inp.classList.remove('error'));
    let hasError = false;
    let errorMessage = '';
    if (!name) { nameInput.classList.add('error'); hasError = true; errorMessage = 'Введите название упражнения'; }
    if (!sets || parseInt(sets) < 1 || parseInt(sets) > 5) { setsInput.classList.add('error'); hasError = true; if (!errorMessage) errorMessage = 'Подходы должны быть от 1 до 5'; }
    if (!reps || parseInt(reps) < 2 || parseInt(reps) > 60) { repsInput.classList.add('error'); hasError = true; if (!errorMessage) errorMessage = 'Повторения должны быть от 2 до 60'; }
    if (hasError) { showToast('⚠️ ' + errorMessage); return; }
    const isSeconds = document.getElementById('exerciseModal').dataset.isSeconds === 'true';
    const repsDisplay = isSeconds ? `${reps} секунд` : `${reps}`;
    editExercises[editingExerciseIndex] = { name: name, sets: parseInt(sets), reps: repsDisplay };
    closeModal('exerciseModal');
    editingExerciseIndex = null;
    window._editOriginalData = null;
    renderEditExercises();
    showToast('✅ Упражнение обновлено');
});

document.getElementById('modalCancelBtn')?.addEventListener('click', function() {
    if (window._editOriginalData && editingExerciseIndex !== null && editExercises[editingExerciseIndex]) {
        editExercises[editingExerciseIndex] = { ...window._editOriginalData };
        renderEditExercises();
    } else if (editingExerciseIndex !== null && editExercises[editingExerciseIndex] && editExercises[editingExerciseIndex].name === 'Новое упражнение') {
        editExercises.splice(editingExerciseIndex, 1);
        renderEditExercises();
    }
    closeModal('exerciseModal');
    editingExerciseIndex = null;
    window._editOriginalData = null;
});

// ===================СОХРАНЕНИЕ И ОТМЕНА В РЕДАКТИРОВАНИИ ===================
document.getElementById('saveEditBtn')?.addEventListener('click', function() {
    if (!preventDoubleClick('saveEditBtn', 2000)) {
        showToast('⏳ Подождите, сохранение уже выполняется...');
        return;
    }
    
    if (editExercises.length === 0) {
        showToast('⚠️ Добавьте хотя бы одно упражнение');
        return;
    }
    const nameInput = document.getElementById('editWorkoutName');
    const title = nameInput ? nameInput.value.trim() : (editCategory || 'Моя тренировка');
    if (!title) { showToast('⚠️ Введите название тренировки'); return; }
    const selectedIcon = document.querySelector('.icon-option-active');
    const icon = selectedIcon ? selectedIcon.dataset.icon : 'bodybuilding';
    const success = saveWorkoutData(editCategory, editLevel, editIsCustom, editWorkoutId, title, icon, editExercises);
    if (success) {
        isEditingWorkout = false;
        
        showToast('✅ Тренировка сохранена!');
        localStorage.removeItem('temp_edit_name');
        localStorage.removeItem('temp_edit_exercises');
        localStorage.removeItem('temp_edit_category');
        localStorage.removeItem('temp_edit_level');
        localStorage.removeItem('temp_edit_isCustom');
        localStorage.removeItem('temp_edit_id');
        if (editIsCustom || editWorkoutId === 'new') {
            const id = editWorkoutId === 'new' ? Date.now().toString() : editWorkoutId;
            const workout = getWorkoutById(id);
            if (workout) {
                window.navigateTo('workout-detail', { category: workout.title, isCustom: true, id: id });
                return;
            }
        }
        window.navigateTo('workout-detail', { category: editCategory, level: editLevel, parentCategory: '' });
    }
});

document.getElementById('cancelEditBtn')?.addEventListener('click', function() {
    isEditingWorkout = false;
    
    localStorage.removeItem('temp_edit_name');
    localStorage.removeItem('temp_edit_exercises');
    localStorage.removeItem('temp_edit_category');
    localStorage.removeItem('temp_edit_level');
    localStorage.removeItem('temp_edit_isCustom');
    localStorage.removeItem('temp_edit_id');
    
    if (editIsCustom || editWorkoutId === 'new') {
        const id = editWorkoutId === 'new' ? null : editWorkoutId;
        if (id) {
            const workout = getWorkoutById(id);
            if (workout) {
                window.navigateTo('workout-detail', { category: workout.title, isCustom: true, id: id });
                return;
            }
        }
        window.navigateTo('workouts');
    } else {
        window.navigateTo('workout-detail', { category: editCategory, level: editLevel, parentCategory: '' });
    }
});

// ===================СБРОС ТРЕНИРОВКИ ===================
function resetWorkout() {
    if (!editCategory || editIsCustom) {
        showToast('⚠️ Эта функция только для готовых тренировок');
        return;
    }

    const oldModal = document.getElementById('resetConfirmModal');
    if (oldModal) oldModal.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'resetConfirmModal';
    overlay.innerHTML = `
        <div class="modal-content" style="max-width:420px; width:95%;">
            <div class="modal-title">Сбросить тренировку?</div>
            <p style="color:var(--slate); font-size:0.95rem; margin:0.5rem 0 1.5rem 0; text-align:center;">Тренировка вернется к исходному виду.</p>
            <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-danger" id="resetConfirmYes" style="flex:1;">
                    Сбросить
                </button>
                <button class="btn btn-primary" id="resetConfirmNo" style="flex:1;">
                    Отмена
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById('resetConfirmYes').addEventListener('click', function() {
        overlay.remove();
        const category = editCategory;
        const level = editLevel || '1 LVL';
        let parentCategory = null;
        for (const parent in exercisesDataDefault) {
            if (exercisesDataDefault[parent] && exercisesDataDefault[parent][category]) {
                parentCategory = parent;
                break;
            }
        }
        if (parentCategory) {
            const defaultExercises = exercisesDataDefault[parentCategory][category][level];
            if (defaultExercises) {
                editExercises = JSON.parse(JSON.stringify(defaultExercises));
                const nameInput = document.getElementById('editWorkoutName');
                if (nameInput) nameInput.value = category + ' ' + level;
                renderEditExercises();
                showToast('✅ Тренировка сброшена к исходному состоянию');
                return;
            }
        }
        if (exercisesDataDefault[category] && exercisesDataDefault[category][level]) {
            const defaultExercises = exercisesDataDefault[category][level];
            if (defaultExercises) {
                editExercises = JSON.parse(JSON.stringify(defaultExercises));
                const nameInput = document.getElementById('editWorkoutName');
                if (nameInput) nameInput.value = category + ' ' + level;
                renderEditExercises();
                showToast('✅ Тренировка сброшена к исходному состоянию');
                return;
            }
        }
        showToast('❌ Не удалось найти исходные данные для этой тренировки');
    });

    document.getElementById('resetConfirmNo').addEventListener('click', function() {
        overlay.remove();
    });
}

// ===================МОИ ТРЕНИРОВКИ (localStorage) ===================
function getMyWorkouts() {
    return JSON.parse(localStorage.getItem('myCustomWorkouts')) || [];
}

function saveMyWorkouts(workouts) {
    localStorage.setItem('myCustomWorkouts', JSON.stringify(workouts));
}

function getWorkoutById(id) {
    const all = getMyWorkouts();
    return all.find(w => w._id === id);
}

function updateWorkout(id, data) {
    const all = getMyWorkouts();
    const index = all.findIndex(w => w._id === id);
    if (index !== -1) {
        all[index] = { ...all[index], ...data };
        saveMyWorkouts(all);
        return true;
    }
    return false;
}

function deleteWorkout(id) {
    const all = getMyWorkouts();
    const filtered = all.filter(w => w._id !== id);
    saveMyWorkouts(filtered);
}

function renderMyWorkouts() {
    const container = document.getElementById('myWorkoutsList');
    const workouts = getMyWorkouts();
    if (workouts.length === 0) {
        container.innerHTML = `<div class="empty-state"><span class="empty-icon">📋</span><h3 class="item-title">Нет своих тренировок</h3><p class="item-desc">Создайте свою первую тренировку!</p></div>`;
        return;
    }
    container.innerHTML = workouts.map(w => `
        <div class="item-card" data-workout-id="${w._id}" onclick="handleWorkoutClick('${w._id}', event)">
            <div class="item-icon"><img src="images/${w.icon || 'bodybuilding'}.png"></div>
            <div class="item-info">
                <h3 class="item-title">${w.title}</h3>
                <p class="item-desc">${w.exercises?.length || 0} упражнений</p>
            </div>
            <button class="item-action workout-delete" onclick="event.stopPropagation(); deleteCustomWorkout('${w._id}')"><i class="fa-regular fa-trash-can"></i></button>
        </div>
    `).join('');
}

function handleWorkoutClick(id, event) {
    const card = event.target.closest('.item-card');
if (card && card.classList.contains('sortable-chosen')) {
        return;
    }
    const workout = getWorkoutById(id);
    if (workout) {
        window.navigateTo('workout-detail', { 
            category: workout.title, 
            isCustom: true, 
            id: id
            // parentCategory НЕ ПЕРЕДАЁМ!
        });
    }
}

window.deleteCustomWorkout = function(id) {
    showConfirmModal(
        'Удалить тренировку?',
        'Это действие нельзя отменить.',
        function() {
            deleteWorkout(id);
            renderMyWorkouts();
            showToast('🗑️ Тренировка удалена');
        },
        'Удалить'
    );
};

window.createNewWorkout = function() {
    window.navigateTo('workout-edit', { category: 'Новая тренировка', isCustom: true, id: 'new' });
};

// ===================СТАТИСТИКА ===================
async function loadStats() {
    const user = await getFirebaseUser();
    if (!user) return;
    const result = await getUserWorkoutsFromFirestore(user.uid);
    if (!result.success) return;
    
    // Исключаем зарядку
    const workouts = result.data.filter(w => {
        const icon = getWorkoutIcon(w);
        return icon !== 'charging';
    });

    // === ОБЩАЯ СТАТИСТИКА ===
    const total = workouts.length;
    const totalSeconds = workouts.reduce((sum, w) => sum + (w.durationSeconds || 0), 0);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalExercises = workouts.reduce((sum, w) => {
        const completed = w.exercises?.filter(e => e.completed === true).length || 0;
        return sum + completed;
    }, 0);
    
    const totalWorkoutsEl = document.getElementById('totalWorkouts');
    const totalMinutesEl = document.getElementById('totalMinutes');
    const totalExercisesEl = document.getElementById('totalExercises');
    
    if (totalWorkoutsEl) totalWorkoutsEl.textContent = total;
    if (totalMinutesEl) totalMinutesEl.textContent = totalMinutes;
    if (totalExercisesEl) totalExercisesEl.textContent = totalExercises;

    // === УПРАЖНЕНИЯ ПО ГРУППАМ МЫШЦ (ТОЛЬКО ПО ИКОНКАМ) ===
    const exerciseCounts = {};
    workouts.forEach(w => {
        (w.exercises || []).forEach(ex => {
            if (ex.completed) {
                const icon = ex.icon || getExerciseIcon(ex.name);
                const category = getCategoryByIcon(icon);
                if (category && category !== 'Зарядка') {
                    exerciseCounts[category] = (exerciseCounts[category] || 0) + 1;
                }
            }
        });
    });

    const exercisesContainer = document.getElementById('exerciseMuscleStats');
    if (exercisesContainer) {
        const displayCategories = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'];
        const maxCount = Math.max(1, ...Object.values(exerciseCounts));
        exercisesContainer.innerHTML = displayCategories.map(cat => {
            const count = exerciseCounts[cat] || 0;
            const percent = Math.round((count / maxCount) * 100);
            return `<div class="stat-item"><span class="stat-name">${cat}</span><div class="stat-bar"><div class="stat-fill" style="width:${percent}%;"></div></div><span class="stat-count">${count}</span></div>`;
        }).join('');
    }

    // === ТРЕНИРОВКИ ПО КАТЕГОРИЯМ (ТОЛЬКО ПО ИКОНКАМ) ===
    const categoryCounts = {};
    workouts.forEach(w => {
        const icon = getWorkoutIcon(w);
        const category = getCategoryByIcon(icon);
        if (category && category !== 'Зарядка') {
            categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        }
    });

    const categoriesContainer = document.getElementById('categoriesStats');
    if (categoriesContainer) {
        const displayCategories = ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело'];
        const maxCount = Math.max(1, ...Object.values(categoryCounts));
        categoriesContainer.innerHTML = displayCategories.map(cat => {
            const count = categoryCounts[cat] || 0;
            const percent = Math.round((count / maxCount) * 100);
            return `<div class="stat-item"><span class="stat-name">${cat}</span><div class="stat-bar"><div class="stat-fill" style="width:${percent}%;"></div></div><span class="stat-count">${count}</span></div>`;
        }).join('');
    }

    // === КАЛЕНДАРЬ ===
    renderCalendar(currentMonth, currentYear);

    // === ИСТОРИЯ ТРЕНИРОВОК ===
    const historyContainer = document.getElementById('workoutHistory');
    if (historyContainer) {
        if (workouts.length === 0) {
            historyContainer.innerHTML = '<p style="color:var(--slate);text-align:center;">Нет выполненных тренировок</p>';
        } else {
            const sortedWorkouts = workouts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
            historyContainer.innerHTML = sortedWorkouts.map(w => {
                const totalEx = w.exercises?.length || 0;
                const completedEx = w.exercises?.filter(e => e.completed === true).length || 0;
                const xpEarned = w.xpEarned || 0;
                const minutes = Math.floor((w.durationSeconds || 0) / 60);
                const detailsText = `${minutes} мин · ${completedEx}/${totalEx} упражнений · ${xpEarned.toFixed(1)} XP`;
                return `<div class="history-item">
                    <div class="history-item-header">
                        <strong class="history-item-title">${w.title}</strong>
                        <span class="history-item-date">${new Date(w.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div class="history-item-details">${detailsText}</div>
                </div>`;
            }).join('');
        }
    }
    applyStatsTab(activeStatsTab);
    initAccordion();
}

// ===================КАЛЕНДАРЬ ===================
async function renderCalendar(month, year) {
    const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    const monthYearEl = document.getElementById('currentMonthYear');
    if (monthYearEl) monthYearEl.textContent = `${monthNames[month]} ${year}`;
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDayOfWeek = firstDay.getDay() || 7;
    const container = document.getElementById('calendarDays');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 1; i < startDayOfWeek; i++) {
        const empty = document.createElement('div');
        empty.classList.add('calendar-empty');
        container.appendChild(empty);
    }
    const today = new Date();
    const user = await getFirebaseUser();
    let workoutDays = [];
    if (user) {
        const result = await getUserWorkoutsFromFirestore(user.uid);
        if (result.success) {
            workoutDays = result.data
                .filter(w => !(w.title || '').includes('Зарядка'))
                .map(w => new Date(w.date));
        }
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement('div');
        dayEl.classList.add('calendar-day');
        dayEl.textContent = day;
        const hasWorkout = workoutDays.some(d => d.getDate() === day && d.getMonth() === month && d.getFullYear() === year);
        if (hasWorkout) dayEl.classList.add('calendar-day-has-workout');
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayEl.classList.add('calendar-day-today');
        }
        container.appendChild(dayEl);
    }
}

document.getElementById('prevMonth')?.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar(currentMonth, currentYear);
});
document.getElementById('nextMonth')?.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    renderCalendar(currentMonth, currentYear);
});

// ===================ПРОФИЛЬ ===================
async function loadProfile() {
    const user = await getFirebaseUser();
    if (!user) return;
    const profileResult = await getUserProfile(user.uid);
    if (!profileResult.success) return;
    const profile = profileResult.data;
    const xp = profile.totalXp || 0;
    const currentLevel = getCurrentLevel(xp);
    const progress = getXpProgress(xp);
    const nextLevel = getNextLevel(xp);
    let progressText = nextLevel ? `${xp.toFixed(1)}/${nextLevel.minXp} XP` : `${xp.toFixed(1)}+ XP`;
    
    const profileName = document.getElementById('profileName');
    const profileInitials = document.getElementById('profileInitials');
    const profileEmailDisplay = document.getElementById('profileEmailDisplay');
    const profileDate = document.getElementById('profileDate');
    const editName = document.getElementById('editName');
    const levelLvl = document.getElementById('levelLvl');
    const levelTitle = document.getElementById('levelTitle');
    const levelProgressText = document.getElementById('levelProgressText');
    const levelFill = document.getElementById('levelFill');
    
    if (profileName) profileName.textContent = profile.displayName || 'Пользователь';
    if (profileInitials) profileInitials.textContent = (profile.displayName || 'П')[0].toUpperCase();
    if (profileEmailDisplay) profileEmailDisplay.textContent = user.email || '';
    if (profileDate && profile.createdAt) {
        const date = new Date(profile.createdAt);
        profileDate.textContent = date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
    }
    if (editName) editName.value = profile.displayName || '';
    if (levelLvl) levelLvl.textContent = currentLevel.id + ' LVL';
    if (levelTitle) levelTitle.textContent = currentLevel.name;
    if (levelProgressText) levelProgressText.textContent = progressText;
    if (levelFill) levelFill.style.width = progress + '%';
    
    const prevLevel = parseInt(localStorage.getItem('prevLevel') || '0');
    if (currentLevel.id > prevLevel) {
        const id = 'new_level_' + currentLevel.id;
        if (!isNotificationSeen(id)) {
            showNotification('🎉', `Поздравляем! Вы достигли ${currentLevel.id} уровня!`, null);
        }
        localStorage.setItem('prevLevel', String(currentLevel.id));
    }
    
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
    if (lastVisit) {
        const daysDiff = Math.floor((Date.now() - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
        if (daysDiff >= 7) {
            const id = 'welcome_back_' + Date.now();
            if (!isNotificationSeen(id)) {
                showNotification('👋', 'Давно не виделись, с возвращением!', null);
            }
        }
    }
    localStorage.setItem(LAST_VISIT_KEY, String(Date.now()));
    initProfileBlocks();
    switchProfileTab(activeProfileTab);
}

// ===================ПРОФИЛЬ - РЕДАКТИРОВАНИЕ ===================
document.getElementById('editProfileBtn')?.addEventListener('click', () => {
    isEditingProfile = true;
    document.getElementById('profileView').style.display = 'none';
    document.getElementById('profileEdit').style.display = 'block';
    const currentName = document.getElementById('profileName').textContent;
    document.getElementById('editName').value = currentName;
});

document.getElementById('cancelProfileEditBtn')?.addEventListener('click', () => {
    isEditingProfile = false;
    document.getElementById('profileView').style.display = 'block';
    document.getElementById('profileEdit').style.display = 'none';
    loadProfile();
});

document.getElementById('saveProfileBtn')?.addEventListener('click', async () => {
    const nameInput = document.getElementById('editName');
    const name = nameInput.value.trim();
    const currentName = document.getElementById('profileName').textContent;

    if (!name) {
        showToast('⚠️ Введите имя и фамилию');
        nameInput.classList.add('error');
        return;
    }
    nameInput.classList.remove('error');

    if (name === currentName) {
        isEditingProfile = false;
        document.getElementById('profileView').style.display = 'block';
        document.getElementById('profileEdit').style.display = 'none';
        return;
    }

    const user = await getFirebaseUser();
    if (user) {
        await updateUserProfile(user.uid, { displayName: name });
        isEditingProfile = false;
        loadProfile();
        showToast('✅ Профиль обновлен');
    }
    document.getElementById('profileView').style.display = 'block';
    document.getElementById('profileEdit').style.display = 'none';
});

// ===================СЛУШАТЕЛЬ АВТОРИЗАЦИИ ===================
firebase.auth().onAuthStateChanged(async (user) => {
    const bottomNav = document.getElementById('bottomNav');
    try {
        if (user) {
            try { 
                await user.reload(); 
            } catch (e) { 
                console.warn('Ошибка перезагрузки пользователя:', e); 
            }
            
            // Проверка подтверждения почты
            if (!user.emailVerified) {
                // Сбрасываем флаг при неподтвержденной почте
                isDataLoaded = false;
                document.querySelectorAll('.page').forEach(p => {
                    p.style.display = 'none';
                    p.classList.remove('page-active');
                });
                if (bottomNav) bottomNav.style.display = 'none';
                const loginPage = document.getElementById('page-login');
                if (loginPage) {
                    loginPage.style.display = 'block';
                    loginPage.classList.add('page-active');
                }
                clearAuthFields();
                return;
            }
            
            // ★★★ ПРОВЕРЯЕМ ФЛАГ ★★★
            if (isDataLoaded) {
                console.log('⚠️ Данные уже загружены, пропускаем');
                return;
            }
            
            // Проверяем, не загружена ли уже страница (для безопасности)
            const isPageLoaded = document.querySelector('#page-workouts.page-active') || 
                                document.querySelector('#page-stats.page-active') || 
                                document.querySelector('#page-profile.page-active');
            if (isPageLoaded) {
                isDataLoaded = true;
                console.log('⚠️ Страница уже загружена, пропускаем');
                return;
            }

            // ★★★ ПОКАЗЫВАЕМ СТРАНИЦУ ЗАГРУЗКИ ★★★
            document.querySelectorAll('.page').forEach(p => {
                p.style.display = 'none';
                p.classList.remove('page-active');
            });
            
            const loadingPage = document.getElementById('page-loading');
            if (loadingPage) {
                loadingPage.style.display = 'block';
                loadingPage.classList.add('page-active');
                console.log('📱 Страница загрузки показана');
            }
            if (bottomNav) bottomNav.style.display = 'none';

            console.log('📊 Загрузка данных...');
            const [profileResult, workoutsResult] = await Promise.all([
                getUserProfile(user.uid),
                getUserWorkoutsFromFirestore(user.uid)
            ]);

            let profile = null;
            if (profileResult.success) {
                profile = profileResult.data;
            } else {
                const newProfile = {
                    displayName: user.displayName || user.email?.split('@')[0] || 'Пользователь',
                    avatar: 'bodybuilding',
                    level: 1,
                    totalXp: 0,
                    createdAt: new Date().toISOString(),
                    tutorialCompleted: false
                };
                await saveUserProfile(user.uid, newProfile);
                profile = newProfile;
            }

            clearAuthFields();

            if (document.readyState !== 'complete') {
                await new Promise(resolve => {
                    window.addEventListener('load', resolve, { once: true });
                });
            }

            await new Promise(resolve => setTimeout(resolve, 200));

            console.log('📊 Загрузка профиля...');
            await loadProfile();
            console.log('📊 Загрузка статистики...');
            await loadStats();
            console.log('📊 Рендер тренировок...');
            renderMyWorkouts();
            await renderCalendar(currentMonth, currentYear);
            updatePremiumUI();
            initProfileBlocks();
            switchProfileTab('my');

            window._tutorialNeeded = profile && profile.tutorialCompleted === false;

            if (typeof syncPendingWorkouts === 'function') {
                syncPendingWorkouts();
            }
            
            // ★★★ УСТАНАВЛИВАЕМ ФЛАГ, ЧТО ДАННЫЕ ЗАГРУЖЕНЫ ★★★
            isDataLoaded = true;
            
            // ★★★ ДАННЫЕ ЗАГРУЖЕНЫ, НО СТРАНИЦУ ЗАГРУЗКИ НЕ ЗАКРЫВАЕМ ★★★
            console.log('✅ Данные загружены, ждем нажатия кнопки');
         
    } else {
        // Пользователь не авторизован - сбрасываем флаг
        isDataLoaded = false;
        console.log('👤 Пользователь не авторизован');
        if (bottomNav) bottomNav.style.display = 'none';
        
        showHero(); // <-- ВМЕСТО ручного переключения
        
        clearAuthFields();
    }
    } catch (error) {
        console.error('❌ Ошибка в onAuthStateChanged:', error);
        // При ошибке сбрасываем флаг
        isDataLoaded = false;
        if (bottomNav) bottomNav.style.display = 'none';
        
        document.querySelectorAll('.page').forEach(p => {
            p.style.display = 'none';
            p.classList.remove('page-active');
        });
        
        const loginPage = document.getElementById('page-login');
        if (loginPage) {
            loginPage.style.display = 'block';
            loginPage.classList.add('page-active');
            console.log('📱 Страница входа показана (ошибка)');
        }
        clearAuthFields();
    }
});

// ===================ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ ===================
function showRegister() {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('page-active');
        p.style.display = ''; // Убираем инлайн display
    });
    const registerPage = document.getElementById('page-register');
    if (registerPage) {
        registerPage.classList.add('page-active');
        registerPage.style.display = 'block'; // Явно показываем
    }
    clearAuthFields();
}

function showLogin() {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('page-active');
        p.style.display = '';
    });
    const loginPage = document.getElementById('page-login');
    if (loginPage) {
        loginPage.classList.add('page-active');
        loginPage.style.display = 'block';
    }
    clearAuthFields();
}

function showHero() {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('page-active');
        p.style.display = '';
    });
    const heroPage = document.getElementById('page-hero');
    if (heroPage) {
        heroPage.classList.add('page-active');
        heroPage.style.display = 'block';
    }
    clearAuthFields();
}

// ===================РЕГИСТРАЦИЯ ===================
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    const nameInput = document.getElementById('regName');
    const emailInput = document.getElementById('regEmail');
    const passwordInput = document.getElementById('regPassword');
    let isSubmitting = false;
    
    // Очистка ошибок при вводе
    nameInput.addEventListener('input', () => { 
        nameInput.classList.remove('error'); 
    });
    emailInput.addEventListener('input', () => { 
        emailInput.classList.remove('error'); 
    });
    passwordInput.addEventListener('input', () => { 
        passwordInput.classList.remove('error'); 
    });
    
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Проверяем, не выполняется ли уже регистрация
        if (isSubmitting) {
            showToast('⏳ Подождите, регистрация уже выполняется...');
            return;
        }
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const btn = registerForm.querySelector('.btn-primary');
        let hasError = false;
        
        // Валидация
        if (!name) { 
            nameInput.classList.add('error'); 
            showToast('⚠️ Введите имя');
            hasError = true; 
        } else { 
            nameInput.classList.remove('error'); 
        }
        
        if (!email) { 
            emailInput.classList.add('error'); 
            showToast('⚠️ Введите почту');
            hasError = true; 
        } else { 
            emailInput.classList.remove('error'); 
        }
        
        if (!password) { 
            passwordInput.classList.add('error'); 
            showToast('⚠️ Введите пароль');
            hasError = true; 
        } else if (password.length < 6) { 
            passwordInput.classList.add('error'); 
            showToast('⚠️ Пароль минимум 6 символов');
            hasError = true; 
        } else { 
            passwordInput.classList.remove('error'); 
        }
        
        if (hasError) return;
        
        // Блокируем кнопку
        isSubmitting = true;
        btn.textContent = 'Регистрация...';
        btn.disabled = true;
        
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await result.user.updateProfile({ displayName: name });
            await saveUserProfile(result.user.uid, {
                displayName: name,
                email: email,
                avatar: 'bodybuilding',
                level: 1,
                totalXp: 0,
                createdAt: new Date().toISOString(),
                tutorialCompleted: false
            });
            await result.user.sendEmailVerification();
            
            // Разблокируем кнопку
            isSubmitting = false;
            btn.textContent = 'Зарегистрироваться';
            btn.disabled = false;
            
            showToast('📧 Подтвердите почту! Письмо отправлено на ' + email);
            
            // Переключаем на страницу входа
            setTimeout(() => {
                showLogin();
            }, 1000);
            
        } catch (error) {
            let message = 'Ошибка регистрации';
            if (error.code === 'auth/email-already-in-use') { 
                message = 'Почта уже используется'; 
                emailInput.classList.add('error'); 
            } else if (error.code === 'auth/weak-password') { 
                message = 'Пароль минимум 6 символов'; 
                passwordInput.classList.add('error'); 
            } else if (error.code === 'auth/invalid-email') { 
                message = 'Неверный формат почты'; 
                emailInput.classList.add('error'); 
            } else if (error.code === 'auth/network-request-failed') { 
                message = 'Проверьте интернет-соединение'; 
                passwordInput.classList.add('error'); 
            } else {
                message = error.message;
            }
            showToast('❌ ' + message);
            
            // Разблокируем кнопку
            isSubmitting = false;
            btn.textContent = 'Зарегистрироваться';
            btn.disabled = false;
        }
    });
}

// ===================ВХОД ===================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    let isSubmitting = false;
    
    // Очистка ошибок при вводе
    emailInput.addEventListener('input', () => { 
        emailInput.classList.remove('error'); 
    });
    passwordInput.addEventListener('input', () => { 
        passwordInput.classList.remove('error'); 
    });
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Проверяем, не выполняется ли уже вход
        if (isSubmitting) {
            showToast('⏳ Подождите, вход уже выполняется...');
            return;
        }
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const btn = loginForm.querySelector('.btn-primary');
        let hasError = false;
        
        // Валидация
        if (!email) { 
            emailInput.classList.add('error'); 
            showToast('⚠️ Введите почту');
            hasError = true; 
        } else { 
            emailInput.classList.remove('error'); 
        }
        
        if (!password) { 
            passwordInput.classList.add('error'); 
            showToast('⚠️ Введите пароль');
            hasError = true; 
        } else { 
            passwordInput.classList.remove('error'); 
        }
        
        if (hasError) return;
        
        // Блокируем кнопку
        isSubmitting = true;
        btn.textContent = 'Вход...';
        btn.disabled = true;
        
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            
            if (!result.user.emailVerified) {
                showToast('⚠️ Подтвердите почту! Письмо отправлено на ' + email);
                // Разблокируем кнопку
                isSubmitting = false;
                btn.textContent = 'Войти в аккаунт';
                btn.disabled = false;
                return;
            }
            
            // Успешный вход - разблокируем перед перезагрузкой
            isSubmitting = false;
            btn.textContent = 'Войти в аккаунт';
            btn.disabled = false;
            
            // Показываем уведомление и перезагружаем
            showToast('✅ Вход выполнен успешно!');
            setTimeout(() => {
                window.location.reload();
            }, 500);
            
} catch (error) {
    let message = '';
    
    if (error.code === 'auth/invalid-credential' || 
        error.code === 'auth/user-not-found' || 
        error.code === 'auth/wrong-password') {
        message = 'Неверный email или пароль.';
    } else if (error.code === 'auth/invalid-email') {
        message = 'Неверный формат email.';
    } else if (error.code === 'auth/too-many-requests') {
        message = 'Слишком много попыток.';
    } else if (error.code === 'auth/network-request-failed') {
        message = 'Проверьте интернет-соединение';
    } else {
        message = 'Ошибка входа. Попробуйте позже';
    }
    
    passwordInput.classList.add('error');
    showToast('❌ ' + message);
            
            // Разблокируем кнопку
            isSubmitting = false;
            btn.textContent = 'Войти в аккаунт';
            btn.disabled = false;
        }
    });
}

// ===================ОЧИСТКА ПОЛЕЙ ВВОДА ===================
function clearAuthFields() {
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    if (loginEmail) {
        loginEmail.value = '';
        loginEmail.classList.remove('error');
    }
    if (loginPassword) {
        loginPassword.value = '';
        loginPassword.classList.remove('error');
    }

    const regName = document.getElementById('regName');
    const regEmail = document.getElementById('regEmail');
    const regPassword = document.getElementById('regPassword');

    if (regName) {
        regName.value = '';
        regName.classList.remove('error');
    }
    if (regEmail) {
        regEmail.value = '';
        regEmail.classList.remove('error');
    }
    if (regPassword) {
        regPassword.value = '';
        regPassword.classList.remove('error');
    }
}

// ===================ВЫХОД ===================
async function logout() {
    showConfirmWithPasswordModal(
        'Выйти из аккаунта?',
        'Введите пароль для подтверждения выхода из аккаунта.',
        function() {
            firebase.auth().signOut();
        },
        'Выйти'
    );
}

function enterApp() {
    if (!navigator.onLine) {
        showOfflineModal();
        return;
    }

    // Закрываем страницу загрузки
    const loadingPage = document.getElementById('page-loading');
    if (loadingPage) {
        loadingPage.style.display = 'none';
        loadingPage.classList.remove('page-active');
    }

    // Переходим на страницу тренировок
    window.navigateTo('workouts');

        // Убеждаемся, что нижнее меню видно
    document.getElementById('bottomNav').style.display = 'block';

    refreshNotificationData();

    // Раскрываем все блоки (аккордеоны)
    setTimeout(() => {
        document.querySelectorAll('.section-block').forEach(block => block.classList.add('open'));
        saveBlocksState();
    }, 100);

    // Запускаем туториал, если нужно
    if (window._tutorialNeeded) {
        setTimeout(() => startTutorial(), 1000);
    }
}

// ===================ПОВТОРНАЯ ОТПРАВКА ПИСЬМА ===================
async function resendVerification() {
    const user = firebase.auth().currentUser;
    if (!user) { showToast('❌ Вы не авторизованы'); return; }
    if (user.emailVerified) { showToast('✅ Почта уже подтверждена'); return; }
    try {
        await user.sendEmailVerification();
        showToast('📧 Письмо отправлено на ' + user.email);
    } catch (error) {
        if (error.code === 'auth/too-many-requests') {
            showToast('⚠️ Слишком много попыток. Подождите несколько минут.');
        } else {
            showToast('❌ Ошибка: ' + error.message);
        }
    }
}

// ===================ДРУЗЬЯ ===================
async function getFriendshipStatus(targetUserId) {
    const user = await getFirebaseUser();
    if (!user) return 'none';
    const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
    const friends = userDoc.data()?.friends || [];
    if (friends.includes(targetUserId)) return 'friends';
    const sentSnapshot = await firebase.firestore()
        .collection('friendRequests')
        .where('from', '==', user.uid)
        .where('to', '==', targetUserId)
        .where('status', '==', 'pending')
        .get();
    if (!sentSnapshot.empty) return 'pending_sent';
    const receivedSnapshot = await firebase.firestore()
        .collection('friendRequests')
        .where('from', '==', targetUserId)
        .where('to', '==', user.uid)
        .where('status', '==', 'pending')
        .get();
    if (!receivedSnapshot.empty) return 'pending_received';
    return 'none';
}

async function searchUsers(query) {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    if (!query || query.trim().length === 0) return { success: true, data: [] };
    try {
        const snapshot = await firebase.firestore()
            .collection('users')
            .where('displayName', '>=', query)
            .where('displayName', '<=', query + '\uf8ff')
            .limit(20)
            .get();
        const results = [];
        for (const doc of snapshot.docs) {
            if (doc.id !== user.uid) {
                const data = doc.data();
                const status = await getFriendshipStatus(doc.id);
                results.push({ id: doc.id, ...data, friendshipStatus: status });
            }
        }
        return { success: true, data: results };
    } catch (error) {
        console.error('Ошибка поиска:', error);
        return { success: false, error: error.message };
    }
}

async function sendFriendRequest(toUserId) {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    const status = await getFriendshipStatus(toUserId);
    if (status !== 'none') return { success: false, error: 'Заявка уже отправлена или вы уже друзья' };
    try {
        await firebase.firestore().collection('friendRequests').add({
            from: user.uid,
            to: toUserId,
            status: 'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return { success: true };
    } catch (error) {
        console.error('Ошибка отправки заявки:', error);
        return { success: false, error: error.message };
    }
}

async function getFriendRequests() {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    try {
        // ПРИНУДИТЕЛЬНО ОБНОВЛЯЕМ ДАННЫЕ ИЗ FIRESTORE
        await firebase.firestore().disableNetwork();
        await firebase.firestore().enableNetwork();
        
        const snapshot = await firebase.firestore()
            .collection('friendRequests')
            .where('to', '==', user.uid)
            .where('status', '==', 'pending')
            .get();
        
        const requests = [];
        for (const doc of snapshot.docs) {
            const data = doc.data();
            const fromUser = await getUserProfile(data.from);
            requests.push({ id: doc.id, from: data.from, fromUser: fromUser.success ? fromUser.data : null, ...data });
        }
        return { success: true, data: requests };
    } catch (error) {
        console.error('Ошибка получения заявок:', error);
        return { success: false, error: error.message };
    }
}

async function acceptFriendRequest(requestId, fromUserId) {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    try {
        await firebase.firestore().collection('friendRequests').doc(requestId).update({ status: 'accepted' });
        await firebase.firestore().collection('users').doc(user.uid).update({ friends: firebase.firestore.FieldValue.arrayUnion(fromUserId) });
        await firebase.firestore().collection('users').doc(fromUserId).update({ friends: firebase.firestore.FieldValue.arrayUnion(user.uid) });
        
        const shownRequests = JSON.parse(localStorage.getItem('shownFriendRequests') || '[]');
        const updated = shownRequests.filter(id => id !== requestId);
        localStorage.setItem('shownFriendRequests', JSON.stringify(updated));
        
        // Уведомление для текущего пользователя (кто принял)
        const friendProfile = await getUserProfile(fromUserId);
        const friendName = friendProfile.success ? friendProfile.data.displayName : 'Пользователь';
        
        const shownFriendNotifications = JSON.parse(localStorage.getItem('shownFriendNotifications') || '[]');
        if (!shownFriendNotifications.includes(fromUserId)) {
            showNotification(
                '👥',
                `У вас новый друг — ${friendName}!`,
                null
            );
            shownFriendNotifications.push(fromUserId);
            localStorage.setItem('shownFriendNotifications', JSON.stringify(shownFriendNotifications));
        }
        
        // Уведомление для инициатора заявки (в Firestore)
        const currentUserProfile = await getUserProfile(user.uid);
        const currentUserName = currentUserProfile.success ? currentUserProfile.data.displayName : 'Пользователь';
        
        try {
            await firebase.firestore().collection('notifications').add({
                to: fromUserId,
                from: user.uid,
                fromName: currentUserName,
                type: 'friend_accepted',
                message: `${currentUserName} принял(а) вашу заявку в друзья!`,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                read: false
            });
            console.log('✅ Уведомление отправлено инициатору заявки');
        } catch (notifyError) {
            console.error('Ошибка отправки уведомления инициатору:', notifyError);
        }
        
        await renderFriendsInProfile();
        
        return { success: true };
    } catch (error) {
        console.error('Ошибка принятия заявки:', error);
        return { success: false, error: error.message };
    }
}

async function rejectFriendRequest(requestId) {
    try {
        const requestDoc = await firebase.firestore().collection('friendRequests').doc(requestId).get();
        const requestData = requestDoc.data();
        let senderName = 'Пользователь';
        
        if (requestData && requestData.from) {
            const senderProfile = await getUserProfile(requestData.from);
            if (senderProfile.success) {
                senderName = senderProfile.data.displayName || 'Пользователь';
            }
        }
        
        await firebase.firestore().collection('friendRequests').doc(requestId).delete();
        
        const shownRequests = JSON.parse(localStorage.getItem('shownFriendRequests') || '[]');
        const updated = shownRequests.filter(id => id !== requestId);
        localStorage.setItem('shownFriendRequests', JSON.stringify(updated));
        
        await renderFriendsInProfile();
        
        showToast(`❌ Заявка от ${senderName} отклонена`);
        
        return { success: true };
    } catch (error) {
        console.error('Ошибка отклонения заявки:', error);
        showToast('❌ Ошибка при отклонении заявки');
        return { success: false, error: error.message };
    }
}

async function getFriendsList() {
    const user = await getFirebaseUser();
    if (!user) return { success: false, error: 'Не авторизован' };
    try {
        const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
        const friendIds = userDoc.data()?.friends || [];
        if (friendIds.length === 0) return { success: true, data: [] };
        const friends = [];
        for (const id of friendIds) {
            const result = await getUserProfile(id);
            if (result.success) friends.push({ id, ...result.data });
        }
        return { success: true, data: friends };
    } catch (error) {
        console.error('Ошибка получения друзей:', error);
        return { success: false, error: error.message };
    }
}

// ===================РЕНДЕР ДРУЗЕЙ В ПРОФИЛЕ ===================
async function renderFriendsInProfile() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('searchResults');
    const requestsDiv = document.getElementById('friendRequests');
    const friendsDiv = document.getElementById('friendsList');
    
    if (searchBtn) {
        searchBtn.onclick = async () => {
            const query = searchInput.value.trim();
            resultsDiv.innerHTML = '';
            if (!query) return;
            const result = await searchUsers(query);
            if (!result.success) { 
                resultsDiv.innerHTML = '<p style="color:var(--slate);font-size:0.9rem;text-align:center;padding:1rem;">Ошибка поиска</p>'; 
                return; 
            }
            if (result.data.length === 0) { 
                resultsDiv.innerHTML = '<p style="color:var(--slate);font-size:0.9rem;text-align:center;padding:1rem;">Пользователи не найдены</p>'; 
                return; 
            }
            resultsDiv.innerHTML = result.data.map(u => {
                const initial = (u.displayName || 'П')[0].toUpperCase();
                let buttonHtml = '';
                if (u.friendshipStatus === 'none') {
                    buttonHtml = `<button class="btn btn-secondary btn-sm" onclick="addFriend('${u.id}', this)">Добавить</button>`;
                } else if (u.friendshipStatus === 'pending_sent') {
                    buttonHtml = `<button class="btn btn-secondary btn-sm" disabled style="opacity:0.6;">Ждем ответа</button>`;
                } else if (u.friendshipStatus === 'pending_received') {
                    buttonHtml = `<button class="btn btn-secondary btn-sm" disabled style="opacity:0.6;">Входящая заявка</button>`;
                } else if (u.friendshipStatus === 'friends') {
                    buttonHtml = `<button class="btn btn-secondary btn-sm" disabled style="opacity:0.6;">В друзьях</button>`;
                }
                return `<div class="friend-result-item">
                    <div class="friend-avatar">${initial}</div>
                    <div class="friend-result-info">
                        <strong>${u.displayName || 'Пользователь'}</strong>
                        <span>${u.email || ''}</span>
                    </div>
                    ${buttonHtml}
                </div>`;
            }).join('');
        };
        
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => { 
                if (e.key === 'Enter') searchBtn.click(); 
            });
        }
    }
    
    // Загружаем заявки
    // Загружаем заявки
    const requests = await getFriendRequests();
    if (requests.success && requests.data.length > 0) {
        const shownRequests = JSON.parse(localStorage.getItem('shownFriendRequests') || '[]');
        const newRequests = requests.data.filter(r => !shownRequests.includes(r.id));
        newRequests.forEach(r => {
            const fromUser = r.fromUser || {};
            const name = fromUser.displayName || 'Пользователь';
            // Уведомление покажется в ЛЮБОМ случае, даже если вкладка "Друзья" не активна
            showFriendRequestNotification('📧', `У вас новая заявка в друзья от ${name}`, r.id);
        });
        requestsHtml = requests.data.map(r => {
            const fromUser = r.fromUser || {};
            const initial = (fromUser.displayName || 'П')[0].toUpperCase();
            return `<div class="friend-request-item" onclick="openFriendRequestProfile('${r.id}','${r.from}')" style="cursor:pointer;">
                <div class="friend-avatar">${initial}</div>
                <div class="friend-result-info">
                    <strong>${fromUser.displayName || 'Пользователь'}</strong>
                    <span>${fromUser.email || ''}</span>
                </div>
                <button class="item-action"><i class="fa-solid fa-chevron-right"></i></button>
            </div>`;
        }).join('');
    } else {
        requestsHtml = '<div class="empty-state"><span class="empty-icon">📧</span><h3 class="item-title">Нет заявок</h3><p class="item-desc">Здесь будут отображаться входящие заявки</p></div>';
    }
    if (requestsDiv) requestsDiv.innerHTML = requestsHtml;
    
    // Загружаем друзей
    const friends = await getFriendsList();
    let friendsHtml = '';
    if (friends.success && friends.data.length > 0) {
        const prevFriends = JSON.parse(localStorage.getItem('prevFriendsList') || '[]');
        const prevFriendIds = prevFriends.map(f => f.id);
        const shownFriendNotifications = JSON.parse(localStorage.getItem('shownFriendNotifications') || '[]');
        friends.data.forEach(f => {
            const friendId = f.id;
            if (!prevFriendIds.includes(friendId) && !shownFriendNotifications.includes(friendId)) {
                showNotification('👤', `У вас новый друг — ${f.displayName || 'Пользователь'}!`, null);
                shownFriendNotifications.push(friendId);
                localStorage.setItem('shownFriendNotifications', JSON.stringify(shownFriendNotifications));
            }
        });
        localStorage.setItem('prevFriendsList', JSON.stringify(friends.data));
        friendsHtml = friends.data.map(f => {
            const initial = (f.displayName || 'П')[0].toUpperCase();
            const level = getCurrentLevel(f.totalXp || 0).id;
            return `<div class="friend-item" onclick="openFriendProfile('${f.id}')" style="cursor:pointer;">
                <div class="friend-avatar">${initial}</div>
                <div class="friend-info">
                    <strong>${f.displayName || 'Пользователь'}</strong>
                    <span>Уровень ${level} · ${(f.totalXp || 0).toFixed(1)} XP</span>
                </div>
                <button class="item-action"><i class="fa-solid fa-chevron-right"></i></button>
            </div>`;
        }).join('');
    } else {
        friendsHtml = '<div class="empty-state"><span class="empty-icon">👥</span><h3 class="item-title">Нет друзей</h3><p class="item-desc">Добавьте друзей, чтобы соревноваться!</p></div>';
    }
    if (friendsDiv) friendsDiv.innerHTML = friendsHtml;
}

// ===================ОТКРЫТИЕ ПРОФИЛЯ ЗАЯВКИ ===================
async function openFriendRequestProfile(requestId, fromUserId) {
    try {
        const result = await getUserProfile(fromUserId);
        if (!result.success) {
            showToast('❌ Не удалось загрузить данные пользователя');
            return;
        }
        
        const userData = result.data;
        
        // Загружаем тренировки
        const workoutsResult = await getUserWorkoutsFromFirestore(fromUserId);
        let workouts = [];
        let totalSeconds = 0;
        let totalExercises = 0;
        
        if (workoutsResult.success) {
            workouts = workoutsResult.data.filter(w => !(w.title || '').includes('Зарядка'));
            totalSeconds = workouts.reduce((sum, w) => sum + (w.durationSeconds || 0), 0);
            totalExercises = workouts.reduce((sum, w) => {
                const completed = w.exercises?.filter(e => e.completed === true).length || 0;
                return sum + completed;
            }, 0);
        }
        
        const name = userData.displayName || 'Пользователь';
        document.getElementById('friendRequestName').textContent = name;
        document.getElementById('friendRequestEmail').textContent = userData.email || 'email не указан';
        document.getElementById('friendRequestAvatar').textContent = name[0].toUpperCase();
        
        const xp = userData.totalXp || 0;
        const currentLevel = getCurrentLevel(xp);
        const progress = getXpProgress(xp);
        const nextLevel = getNextLevel(xp);
        const progressText = nextLevel ? `${xp.toFixed(1)}/${nextLevel.minXp} XP` : `${xp.toFixed(1)}+ XP`;
        
        document.getElementById('friendRequestLevelLvl').textContent = currentLevel.id + ' LVL';
        document.getElementById('friendRequestLevelTitle').textContent = currentLevel.name;
        document.getElementById('friendRequestLevelProgressText').textContent = progressText;
        document.getElementById('friendRequestLevelFill').style.width = progress + '%';
        
        document.getElementById('friendRequestTotalWorkouts').textContent = workouts.length;
        document.getElementById('friendRequestTotalMinutes').textContent = Math.floor(totalSeconds / 60);
        document.getElementById('friendRequestTotalExercises').textContent = totalExercises;
        
        // Сохраняем ID заявки и пользователя для кнопок
        document.getElementById('friendRequestAcceptBtn').dataset.requestId = requestId;
        document.getElementById('friendRequestAcceptBtn').dataset.userId = fromUserId;
        document.getElementById('friendRequestRejectBtn').dataset.requestId = requestId;
        
        openModal('friendRequestProfileModal');
        
    } catch (error) {
        console.error('Ошибка загрузки профиля:', error);
        showToast('❌ Ошибка загрузки профиля');
    }
}

// ===================ОБРАБОТЧИКИ КНОПОК ЗАЯВКИ ===================
document.getElementById('friendRequestAcceptBtn')?.addEventListener('click', async function() {
    const requestId = this.dataset.requestId;
    const userId = this.dataset.userId;
    if (!requestId || !userId) {
        showToast('❌ Ошибка: данные не найдены');
        return;
    }
    
    const result = await acceptFriendRequest(requestId, userId);
    if (result.success) {
        closeModal('friendRequestProfileModal');
        await renderFriendsInProfile();
        showToast('✅ Заявка принята!');
    } else {
        showToast('❌ Ошибка при принятии заявки');
    }
});

document.getElementById('friendRequestRejectBtn')?.addEventListener('click', async function() {
    const requestId = this.dataset.requestId;
    if (!requestId) {
        showToast('❌ Ошибка: данные не найдены');
        return;
    }
    
    const result = await rejectFriendRequest(requestId);
    if (result.success) {
        closeModal('friendRequestProfileModal');
        await renderFriendsInProfile();
        showToast('❌ Заявка отклонена');
    } else {
        showToast('❌ Ошибка при отклонении заявки');
    }
});

document.getElementById('friendProfileCloseBtn')?.addEventListener('click', function() {
    closeModal('friendProfileModal');
    currentFriendId = null;
    currentFriendData = null;
});

// ===================ДРУЗЬЯ - ГЛОБАЛЬНЫЕ КНОПКИ ===================
window.addFriend = async function(userId, btnElement) {
    if (btnElement) { btnElement.textContent = 'Отправка...'; btnElement.disabled = true; btnElement.style.opacity = '0.6'; }
    const result = await sendFriendRequest(userId);
    if (!result.success) {
        if (btnElement) { btnElement.textContent = 'Добавить'; btnElement.disabled = false; btnElement.style.opacity = '1'; }
        console.error('Ошибка:', result.error);
        const resultsDiv = document.getElementById('searchResults');
        resultsDiv.innerHTML += `<p style="color:#EF4444;font-size:0.8rem;">${result.error}</p>`;
        return;
    }
    if (btnElement) { btnElement.textContent = 'Ждем ответа'; btnElement.disabled = true; btnElement.style.opacity = '0.6'; }
    await renderFriendsInProfile();
};

window.acceptFriend = async function(requestId, fromUserId) {
    const result = await acceptFriendRequest(requestId, fromUserId);
    if (result.success) await renderFriendsInProfile();
    else console.error('Ошибка принятия:', result.error);
};

window.rejectFriend = async function(requestId) {
    const result = await rejectFriendRequest(requestId);
    if (result.success) await renderFriendsInProfile();
    else console.error('Ошибка отклонения:', result.error);
};

window.removeFriend = async function(friendId) {
    showConfirmModal(
        'Удалить друга?',
        'Вы больше не будете видеть его в списке друзей.',
        async function() {
            const user = await getFirebaseUser();
            if (!user) { 
                showToast('❌ Пользователь не авторизован'); 
                return; 
            }
            try {
                const friendProfile = await getUserProfile(friendId);
                const friendName = friendProfile.success ? friendProfile.data.displayName : 'Пользователь';
                
                const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
                const currentFriends = userDoc.data()?.friends || [];
                const updatedFriends = currentFriends.filter(id => id !== friendId);
                await firebase.firestore().collection('users').doc(user.uid).update({ friends: updatedFriends });
                
                const friendDoc = await firebase.firestore().collection('users').doc(friendId).get();
                const friendFriends = friendDoc.data()?.friends || [];
                const updatedFriendFriends = friendFriends.filter(id => id !== user.uid);
                await firebase.firestore().collection('users').doc(friendId).update({ friends: updatedFriendFriends });
                
                const shownFriendNotifications = JSON.parse(localStorage.getItem('shownFriendNotifications') || '[]');
                const updatedShown = shownFriendNotifications.filter(id => id !== friendId);
                localStorage.setItem('shownFriendNotifications', JSON.stringify(updatedShown));
                
                const prevFriends = JSON.parse(localStorage.getItem('prevFriendsList') || '[]');
                const updatedPrev = prevFriends.filter(f => f.id !== friendId);
                localStorage.setItem('prevFriendsList', JSON.stringify(updatedPrev));
                
                await renderFriendsInProfile();
                showToast(`✅ ${friendName} удалён из друзей`);
            } catch (error) {
                console.error('Ошибка удаления друга:', error);
                showToast('❌ Ошибка при удалении друга');
            }
        },
        'Удалить'
    );
};

// ===================ВСЕ УПРАЖНЕНИЯ ДЛЯ СПИСКА ===================
function getAllExercises() {
    const all = [];
    for (const category in exercisesData) {
        if (typeof exercisesData[category] === 'object' && !Array.isArray(exercisesData[category])) {
            for (const subCategory in exercisesData[category]) {
                if (exercisesData[category][subCategory]._premium) continue;
                if (typeof exercisesData[category][subCategory] === 'object' && !Array.isArray(exercisesData[category][subCategory])) {
                    for (const level in exercisesData[category][subCategory]) {
                        const levelData = exercisesData[category][subCategory][level];
                        // Проверяем, массив ли это
                        if (Array.isArray(levelData)) {
                            levelData.forEach(ex => {
                                if (!all.some(e => e.name === ex.name && e.category === subCategory)) {
                                    all.push({ ...ex, category: subCategory, level: level });
                                }
                            });
                        }
                        // Или объект с _exercises
                        else if (levelData && typeof levelData === 'object' && levelData._exercises) {
                            levelData._exercises.forEach(ex => {
                                if (!all.some(e => e.name === ex.name && e.category === subCategory)) {
                                    all.push({ ...ex, category: subCategory, level: level });
                                }
                            });
                        }
                    }
                }
            }
        }
    }
    return all;
}

let allExercisesList = [];
let currentCategoryFilter = 'all';
let currentSearchQuery = '';

function openExerciseList() {
    closeModal('addExerciseModal');
    allExercisesList = getAllExercises();
    currentCategoryFilter = 'all';
    currentSearchQuery = '';
    document.getElementById('exerciseSearchInput').value = '';
    window.navigateTo('exercise-list');
}

// ===================РЕНДЕР СТРАНИЦЫ СПИСКА УПРАЖНЕНИЙ ===================
function renderExerciseListPage() {
    document.querySelectorAll('#exerciseCategoryFilter .icon-option').forEach(el => {
        el.classList.toggle('icon-option-active', el.dataset.category === currentCategoryFilter);
    });
    document.querySelectorAll('#exerciseCategoryFilter .icon-option').forEach(el => {
        el.onclick = function() {
            document.querySelectorAll('#exerciseCategoryFilter .icon-option').forEach(e => e.classList.remove('icon-option-active'));
            this.classList.add('icon-option-active');
            currentCategoryFilter = this.dataset.category;
            renderExerciseListPageContent();
        };
    });
    document.getElementById('exerciseSearchInput').oninput = function() {
        currentSearchQuery = this.value.trim().toLowerCase();
        renderExerciseListPageContent();
    };
    renderExerciseListPageContent();
}

function renderExerciseListPageContent() {
    const container = document.getElementById('exerciseListContainer');
    const searchQuery = currentSearchQuery.toLowerCase();
    let filtered = allExercisesList;
    if (currentCategoryFilter !== 'all') {
        filtered = filtered.filter(ex => ex.category === currentCategoryFilter);
    }
    if (searchQuery) {
        filtered = filtered.filter(ex => ex.name.toLowerCase().includes(searchQuery));
    }
    filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (filtered.length === 0) {
        container.innerHTML = '<p style="color:var(--slate);text-align:center;padding:2rem 0;">Упражнения не найдены</p>';
        return;
    }
    container.innerHTML = filtered.map(ex => {
        const icon = getExerciseIcon(ex.name); // ← здесь используем функцию
        return `<div class="item-card" onclick="addExerciseFromList('${ex.name}', ${ex.sets}, '${ex.reps}')" style="cursor:pointer; margin-bottom:0.8rem;">
            <div class="item-icon" style="width:44px;height:44px;min-width:44px;background:var(--accent-light);border-radius:10px;display:flex;align-items:center;justify-content:center;">
                <img src="images/${icon}.png" style="width:28px;height:28px;object-fit:contain;">
            </div>
            <div class="item-info"><h3 class="item-title">${ex.name}</h3><p class="item-desc">${formatSets(ex.sets)} × ${formatReps(ex.reps)}</p></div>
        </div>`;
    }).join('');
}

// ===================ДОБАВЛЕНИЕ УПРАЖНЕНИЯ ===================
function openAddExerciseModal() {
    const maxExercises = getMaxExercisesForLevel(editLevel, editIsCustom);
    if (editExercises.length >= maxExercises) {
        showToast(`⚠️ Вы достигли максимума упражнений в этой категории (${maxExercises})`);
        return;
    }
    openModal('addExerciseModal');
}

function closeAddExerciseModal() {
    closeModal('addExerciseModal');
}

function addExerciseFromList(name, sets, reps) {
    const repsStr = String(reps || '');
    const isSeconds = repsStr.includes('сек') || repsStr.includes('с') || repsStr.includes('Секунд');
    const repsValue = parseInt(repsStr.replace(/[^0-9.]/g, '')) || 0;
    const repsDisplay = isSeconds ? `${repsValue} секунд` : `${repsValue}`;
    
    // Получаем иконку по имени упражнения
    const icon = getExerciseIcon(name);
    
    editExercises.push({ 
        name: name, 
        sets: parseInt(sets) || 3, 
        reps: repsDisplay,
        icon: icon
    });
    
    showToast('✅ Упражнение добавлено');

    if (editIsCustom || editWorkoutId === 'new') {
        const nameInput = document.getElementById('editWorkoutName');
        if (nameInput) localStorage.setItem('temp_edit_name', nameInput.value);
        localStorage.setItem('temp_edit_exercises', JSON.stringify(editExercises));
        localStorage.setItem('temp_edit_category', editCategory);
        localStorage.setItem('temp_edit_level', editLevel);
        localStorage.setItem('temp_edit_isCustom', editIsCustom);
        localStorage.setItem('temp_edit_id', editWorkoutId || '');
    }

    window.navigateTo('workout-edit', {
        category: editCategory,
        isCustom: editIsCustom,
        id: editWorkoutId,
        level: editLevel,
        exercises: editExercises
    });
}

// ===================МОДАЛЬНОЕ ОКНО "СОЗДАТЬ УПРАЖНЕНИЕ" ===================
function openCreateExerciseModal() {
    closeModal('addExerciseModal');
    closeModal('exerciseModal');
    document.getElementById('createExerciseName').value = 'Новое упражнение';
    document.getElementById('createExerciseSets').value = 3;
    document.getElementById('createExerciseReps').value = 12;
    document.querySelectorAll('#createExerciseModal .toggle-btn').forEach(b => b.classList.remove('toggle-btn-active'));
    document.querySelector('#createExerciseModal .toggle-btn[data-type="reps"]')?.classList.add('toggle-btn-active');
    document.getElementById('createSecondLabel').textContent = 'Повторения';
    document.querySelectorAll('#createExerciseModal input').forEach(inp => inp.classList.remove('error'));
    
    // Сбрасываем выбор значка на дефолтный
    document.querySelectorAll('#createExerciseIconPicker .icon-option').forEach(el => {
        el.classList.remove('icon-option-active');
    });
    document.querySelector('#createExerciseIconPicker .icon-option[data-icon="bodybuilding"]')?.classList.add('icon-option-active');
    
    window._isNewExercise = true;
    window._tempExerciseIndex = editExercises.length;
    editExercises.push({ name: 'Новое упражнение', sets: 3, reps: 12, icon: 'bodybuilding' });
    renderEditExercises();
    openModal('createExerciseModal');
}

// ===================ВЫБОР ЗНАЧКА В МОДАЛКЕ СОЗДАНИЯ УПРАЖНЕНИЯ ===================
document.querySelectorAll('#createExerciseIconPicker .icon-option').forEach(el => {
    el.addEventListener('click', function() {
        document.querySelectorAll('#createExerciseIconPicker .icon-option').forEach(e => e.classList.remove('icon-option-active'));
        this.classList.add('icon-option-active');
    });
});

document.querySelectorAll('#createExerciseModal .toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('#createExerciseModal .toggle-btn').forEach(b => b.classList.remove('toggle-btn-active'));
        this.classList.add('toggle-btn-active');
        const label = document.getElementById('createSecondLabel');
        if (this.dataset.type === 'reps') {
            label.textContent = 'Повторения';
        } else {
            label.textContent = 'Секунды';
        }
        document.querySelectorAll('#createExerciseModal input').forEach(inp => inp.classList.remove('error'));
    });
});

document.querySelectorAll('#createExerciseModal input').forEach(inp => {
    inp.addEventListener('input', function() {
        this.classList.remove('error');
    });
});

document.getElementById('createExerciseCancelBtn')?.addEventListener('click', function() {
    closeModal('createExerciseModal');
    if (window._isNewExercise && window._tempExerciseIndex !== null) {
        editExercises.splice(window._tempExerciseIndex, 1);
        renderEditExercises();
        window._tempExerciseIndex = null;
        window._isNewExercise = false;
    }
});

document.getElementById('createExerciseSaveBtn')?.addEventListener('click', function() {
    const name = document.getElementById('createExerciseName').value.trim();
    const sets = document.getElementById('createExerciseSets').value.trim();
    const reps = document.getElementById('createExerciseReps').value.trim();
    const nameInput = document.getElementById('createExerciseName');
    const setsInput = document.getElementById('createExerciseSets');
    const repsInput = document.getElementById('createExerciseReps');
    
    // Получаем выбранный значок
    const selectedIcon = document.querySelector('#createExerciseIconPicker .icon-option-active');
    const icon = selectedIcon ? selectedIcon.dataset.icon : 'bodybuilding';
    
    [nameInput, setsInput, repsInput].forEach(inp => inp.classList.remove('error'));
    let hasError = false;
    let errorMessage = '';
    if (!name) { nameInput.classList.add('error'); hasError = true; errorMessage = 'Введите название упражнения'; }
    if (!sets || parseInt(sets) < 1 || parseInt(sets) > 5) { setsInput.classList.add('error'); hasError = true; if (!errorMessage) errorMessage = 'Подходы должны быть от 1 до 5'; }
    if (!reps || parseInt(reps) < 2 || parseInt(reps) > 60) { repsInput.classList.add('error'); hasError = true; if (!errorMessage) errorMessage = 'Повторения должны быть от 2 до 60'; }
    if (hasError) { showToast('⚠️ ' + errorMessage); return; }
    const isSeconds = document.querySelector('#createExerciseModal .toggle-btn-active')?.dataset.type === 'seconds';
    const repsDisplay = isSeconds ? `${reps} секунд` : `${reps}`;
    if (window._tempExerciseIndex !== null) {
        editExercises[window._tempExerciseIndex] = { 
            name: name, 
            sets: parseInt(sets), 
            reps: repsDisplay,
            icon: icon 
        };
    } else {
        editExercises.push({ 
            name: name, 
            sets: parseInt(sets), 
            reps: repsDisplay,
            icon: icon 
        });
        window._isNewExercise = true;
    }
    closeModal('createExerciseModal');
    renderEditExercises();
    showToast('✅ Упражнение создано');
    window._tempExerciseIndex = null;
    window._isNewExercise = false;
});

// ===================ОФЛАЙН МОДАЛКА ===================
function showOfflineModal() {
    openModal('offlineModal');
}

function closeOfflineModal() {
    closeModal('offlineModal');
    const loadingPage = document.getElementById('page-loading');
    if (loadingPage && loadingPage.classList.contains('page-active')) {
        enterApp();
    }
}

window.addEventListener('offline', function() {
    const loadingPage = document.getElementById('page-loading');
    if (loadingPage && loadingPage.classList.contains('page-active')) return;
    const isInApp = document.getElementById('page-workouts').classList.contains('page-active') ||
                    document.getElementById('page-stats').classList.contains('page-active') ||
                    document.getElementById('page-profile').classList.contains('page-active');
    if (!isInApp) return;
    if (!isOfflineModalShown) {
        showOfflineModal();
        isOfflineModalShown = true;
    }
});

window.addEventListener('online', function() {
    closeOfflineModal();
    isOfflineModalShown = false;
    if (typeof syncPendingWorkouts === 'function') syncPendingWorkouts();
});

// ===================УВЕДОМЛЕНИЕ О РЕЙТИНГЕ ===================
function checkRankNotification(currentRank, type) {
    const key = type === 'world' ? LAST_WORLD_RANK_KEY : LAST_FRIENDS_RANK_KEY;
    const lastRank = parseInt(localStorage.getItem(key) || '0');
    
    if (currentRank < lastRank || lastRank === 0) {
        const rankText = currentRank <= 3 ? '🥇' : currentRank <= 10 ? '⭐' : '📈';
        const rankName = type === 'world' ? 'мировом' : 'дружеском';
        
        const id = `${type}_rank_${currentRank}_${Date.now()}`;
        if (!isNotificationSeen(id)) {
            showNotification(
                rankText,
                `В ${rankName} рейтинге вы на ${currentRank} месте!`,
                null
            );
            markNotificationSeen(id);
        }
    }
    
    localStorage.setItem(key, String(currentRank));
}

// ===================МИРОВОЙ РЕЙТИНГ ===================
async function loadWorldLeaderboard() {
    const container = document.getElementById('worldLeaderboard');
    if (!container) return;
    container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Загрузка рейтинга...</div>';
    try {
        const user = await getFirebaseUser();
        if (!user) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Авторизуйтесь, чтобы увидеть рейтинг</div>';
            return;
        }
        const snapshot = await firebase.firestore()
            .collection('users')
            .orderBy('totalXp', 'desc')
            .limit(30)
            .get();
        const users = [];
        snapshot.forEach(doc => { users.push({ id: doc.id, ...doc.data() }); });
        if (users.length === 0) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Пока нет пользователей</div>';
            return;
        }
        
        const currentRank = users.findIndex(u => u.id === user.uid) + 1;
        if (currentRank > 0) {
            checkRankNotification(currentRank, 'world');
        }
        
container.innerHTML = users.map((userData, index) => {
    const position = index + 1;
    const level = getCurrentLevel(userData.totalXp || 0);
    const date = userData.createdAt ? new Date(userData.createdAt).toLocaleDateString('ru-RU') : '—';
    const isCurrentUser = userData.id === user.uid;
    return `<div class="item-card ${isCurrentUser ? 'current-user' : ''}">
        <div class="exercise-status" id="status-${index}">
            <span class="exercise-number">${position}</span>
        </div>
        <div class="item-info">
            <h3 class="item-title">${userData.displayName || 'Пользователь'}</h3>
            <p class="item-desc">Уровень ${level.id} · ${date}</p>
        </div>
        <div class="item-xp">${(userData.totalXp || 0).toFixed(1)} XP</div>
    </div>`;
}).join('');
    } catch (error) {
        console.error('Ошибка загрузки рейтинга:', error);
        let message = 'Ошибка загрузки. Проверьте интернет.';
        if (error.code === 'failed-precondition' && error.message.includes('index')) {
            message = 'Для рейтинга требуется создать индекс в Firebase. Обратитесь к администратору.';
        }
        container.innerHTML = `<div style="text-align:center;color:#EF4444;padding:2rem 0;">${message}</div>`;
    }
}

// ===================РЕЙТИНГ ДРУЗЕЙ ===================
async function loadFriendsLeaderboard() {
    const container = document.getElementById('friendsLeaderboard');
    if (!container) {
        console.warn('Контейнер friendsLeaderboard не найден');
        return;
    }
    
    container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Загрузка рейтинга друзей...</div>';
    
    try {
        const user = await getFirebaseUser();
        if (!user) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Авторизуйтесь, чтобы увидеть рейтинг друзей</div>';
            return;
        }

        const friendsResult = await getFriendsList();
        if (!friendsResult.success) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Ошибка загрузки друзей</div>';
            return;
        }

        const friends = friendsResult.data || [];

        const userProfileResult = await getUserProfile(user.uid);
        if (!userProfileResult.success) {
            container.innerHTML = '<div style="text-align:center;color:var(--slate);padding:2rem 0;">Ошибка загрузки профиля</div>';
            return;
        }

        let allUsers = [
            { id: user.uid, ...userProfileResult.data, isCurrentUser: true }
        ];
        
        friends.forEach(friend => {
            allUsers.push({ ...friend, isCurrentUser: false });
        });

        allUsers.sort((a, b) => (b.totalXp || 0) - (a.totalXp || 0));

        const currentRank = allUsers.findIndex(u => u.id === user.uid) + 1;
        if (currentRank > 0) {
            checkRankNotification(currentRank, 'friends');
        }

        let html = allUsers.map((userData, index) => {
            const position = index + 1;
            const level = getCurrentLevel(userData.totalXp || 0);
            const date = userData.createdAt ? new Date(userData.createdAt).toLocaleDateString('ru-RU') : '—';
            const isCurrentUser = userData.isCurrentUser;
            const name = userData.displayName || 'Пользователь';
            
            return `<div class="item-card ${isCurrentUser ? 'current-user' : ''}">
                <div class="exercise-status" id="status-${index}">
                    <span class="exercise-number">${position}</span>
                </div>
                <div class="item-info">
                    <h3 class="item-title">${name}</h3>
                    <p class="item-desc">Уровень ${level.id} · ${date}</p>
                </div>
                <div class="item-xp">${(userData.totalXp || 0).toFixed(1)} XP</div>
            </div>`;
        }).join('');

        if (friends.length === 0) {
            html += `<div class="empty-state" style="padding:1.5rem 0;">
                <span class="empty-icon">👥</span>
                <h3 class="empty-title">Нет друзей</h3>
                <p class="empty-text">Добавьте друзей, чтобы соревноваться!</p>
            </div>`;
        }

        container.innerHTML = html;

    } catch (error) {
        console.error('Ошибка загрузки рейтинга друзей:', error);
        container.innerHTML = `<div style="text-align:center;color:#EF4444;padding:2rem 0;">Ошибка загрузки. Проверьте интернет.</div>`;
    }
}

// ===================PULL-TO-REFRESH ===================
let pullStartY = 0, pullOffset = 0, isPulling = false, pullRefreshEnabled = true, pullContainer = null;

function initPullToRefresh() {
    const containers = document.querySelectorAll('.dashboard-container, .profile-container, .main-content');
    containers.forEach(container => {
        container.addEventListener('touchstart', function(e) {
            if (this.scrollTop === 0 && window.scrollY === 0) {
                pullStartY = e.touches[0].clientY;
                isPulling = true;
                pullContainer = this;
            }
        }, { passive: true });
        container.addEventListener('touchmove', function(e) {
            if (!isPulling) return;
            const currentY = e.touches[0].clientY;
            pullOffset = currentY - pullStartY;
            if (pullOffset > 50 && pullRefreshEnabled) {
                e.preventDefault();
                document.getElementById('pullToRefresh').style.display = 'block';
            }
        }, { passive: false });
        container.addEventListener('touchend', function(e) {
            if (!isPulling) return;
            if (pullOffset > 100 && pullRefreshEnabled) {
                performRefresh();
            } else {
                document.getElementById('pullToRefresh').style.display = 'none';
            }
            isPulling = false;
            pullOffset = 0;
            pullContainer = null;
        }, { passive: true });
    });
}

async function performRefresh() {
    pullRefreshEnabled = false;
    document.getElementById('pullToRefresh').style.display = 'block';
    try {
        const user = await getFirebaseUser();
        if (user) {
            await loadProfile();
            await loadStats();
            renderMyWorkouts();
            await renderCalendar(currentMonth, currentYear);
            if (document.getElementById('stats-world')?.classList.contains('stats-tab-content-active')) {
                await loadWorldLeaderboard();
                await loadFriendsLeaderboard();
            }
            if (typeof syncPendingWorkouts === 'function') await syncPendingWorkouts();
            showToast('✅ Данные обновлены');
        }
    } catch (error) {
        console.error('Ошибка обновления:', error);
        showToast('❌ Ошибка обновления');
    } finally {
        document.getElementById('pullToRefresh').style.display = 'none';
        pullRefreshEnabled = true;
    }
}

// ===================ТОСТ ===================
function showToast(message, duration = 3000) {
    const oldToast = document.getElementById('toast');
    if (oldToast) oldToast.remove();
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ===================ТУТОРИАЛ ===================
const TUTORIAL_KEY = 'tutorialCompleted';

function isTutorialCompleted() {
    return localStorage.getItem(TUTORIAL_KEY) === 'true';
}

function setTutorialCompleted() {
    localStorage.setItem(TUTORIAL_KEY, 'true');
}

let currentTutorialStep = 0;
let tutorialActive = false;

let _savedEditPagesState = true;
let _savedEditWorkoutState = true;

function startTutorial() {
    if (document.getElementById('tutorialOverlay')) return;

    _savedEditPagesState = localStorage.getItem(EDIT_PAGES_KEY) !== 'false';
    _savedEditWorkoutState = localStorage.getItem(EDIT_WORKOUT_KEY) !== 'false';

    localStorage.setItem(EDIT_PAGES_KEY, 'true');
    localStorage.setItem(EDIT_WORKOUT_KEY, 'true');
    updateEditPagesUI(true);
    updateEditWorkoutUI(true);

    tutorialActive = true;
    document.addEventListener('click', blockClicksDuringTutorial, true);
    showTutorialStep(0);
}

function blockClicksDuringTutorial(e) {
    if (!tutorialActive) return;
    const tooltip = document.querySelector('.tutorial-tooltip');
    if (tooltip && tooltip.contains(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function scrollToElement(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = rect.top + scrollTop - 100;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}

function createTutorialOverlay(step) {
    const overlay = document.createElement('div');
    overlay.id = 'tutorialOverlay';
    overlay.className = 'tutorial-overlay';
    document.body.appendChild(overlay);

    let highlightElements = [];
    if (step.highlight) {
        if (Array.isArray(step.highlight)) {
            const elements = [];
            step.highlight.forEach(sel => {
                if (sel.startsWith('.')) {
                    document.querySelectorAll(sel).forEach(el => elements.push(el));
                } else {
                    const el = document.querySelector(sel);
                    if (el) elements.push(el);
                }
            });
            highlightElements = [...new Set(elements)];
        } else {
            const elements = document.querySelectorAll(step.highlight);
            highlightElements = Array.from(elements);
        }
        highlightElements.forEach(el => el.classList.add('tutorial-highlight'));
        setTimeout(() => {
            highlightElements.forEach(el => {
                el.classList.add('tutorial-highlight-active');
                setTimeout(() => el.classList.add('pulsing'), 100);
            });
        }, 50);
        overlay._highlightElements = highlightElements;
        if (highlightElements.length > 0) {
            setTimeout(() => scrollToElement(highlightElements[0]), 300);
        }
    }

    let dotsHtml = '';
    for (let i = 0; i < tutorialSteps.length; i++) {
        let dotClass = 'tutorial-dot';
if (i < currentTutorialStep) {
    dotClass += ' tutorial-dot-active';
} else if (i === currentTutorialStep) {
    dotClass += ' tutorial-dot-active';
}
dotsHtml += `<div class="${dotClass}"></div>`;
    }
    const isLast = step.isLast || false;
    const buttonText = isLast ? 'Начать тренироваться' : 'Понятно';

    const tooltip = document.createElement('div');
    tooltip.className = 'tutorial-tooltip';
    tooltip.id = 'tutorialTooltip';

    tooltip.style.position = 'fixed';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.zIndex = '10001';
    tooltip.style.maxWidth = '500px';
    tooltip.style.width = '90%';
    tooltip.style.bottom = '30px';
    tooltip.style.top = 'auto';

    tooltip.innerHTML = `
        <div class="tutorial-dots">${dotsHtml}</div>
        <p class="tutorial-text">${step.text}</p>
        <div class="tutorial-buttons">
            <button class="btn btn-primary" onclick="nextTutorialStep()" style="padding:0.6rem 2rem; width:auto;">${buttonText}</button>
        </div>
    `;
    document.body.appendChild(tooltip);

    const autoSteps = [1, 8, 9, 15, 16];
    const isAuto = autoSteps.includes(step.id) && highlightElements.length > 0;

    if (isAuto) {
        const targetEl = highlightElements[0];
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
            const tooltipRect = tooltip.getBoundingClientRect();
            const tooltipHeight = tooltipRect.height;
            const rect = targetEl.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const isVisible = rect.top >= 0 && rect.bottom <= viewportHeight;
            if (!isVisible) {
                tooltip.style.bottom = '30px';
                tooltip.style.top = 'auto';
            } else {
                let topPosition = rect.top - tooltipHeight - 30;
                let fitsAbove = topPosition >= 10;
                if (fitsAbove) {
                    tooltip.style.top = topPosition + 'px';
                    tooltip.style.bottom = 'auto';
                } else {
                    tooltip.style.bottom = '30px';
                    tooltip.style.top = 'auto';
                }
            }
            tooltip.classList.add('tutorial-tooltip-active');
        }, 500);
    } else {
        setTimeout(() => {
            tooltip.classList.add('tutorial-tooltip-active');
        }, 200);
    }

    setTimeout(() => overlay.classList.add('tutorial-overlay-active'), 50);
}

function removeTutorialOverlay() {
    const overlay = document.getElementById('tutorialOverlay');
    if (overlay) {
        overlay.classList.remove('tutorial-overlay-active');
        if (overlay._highlightElements) {
            overlay._highlightElements.forEach(el => {
                el.classList.remove('tutorial-highlight-active', 'pulsing');
                setTimeout(() => el.classList.remove('tutorial-highlight'), 400);
            });
        }
        setTimeout(() => overlay.remove(), 500);
    }
    const tooltip = document.querySelector('.tutorial-tooltip');
    if (tooltip) {
        tooltip.classList.remove('tutorial-tooltip-active');
        setTimeout(() => tooltip.remove(), 400);
    }
}

function showTutorialStep(index) {
    if (index >= tutorialSteps.length) {
        finishTutorial();
        return;
    }
    const step = tutorialSteps[index];
    currentTutorialStep = index;
    if (step.page) window.navigateTo(step.page);
    if (step.action) setTimeout(() => step.action(), 600);
    setTimeout(() => createTutorialOverlay(step), 800);
}

function nextTutorialStep() {
    const nextIndex = currentTutorialStep + 1;
    removeTutorialOverlay();
    setTimeout(() => showTutorialStep(nextIndex), 400);
}

async function finishTutorial() {
    removeTutorialOverlay();
    setTutorialCompleted();
    const user = await getFirebaseUser();
    if (user) await updateUserProfile(user.uid, { tutorialCompleted: true });
    tutorialActive = false;
    document.removeEventListener('click', blockClicksDuringTutorial, true);

    localStorage.setItem(EDIT_PAGES_KEY, String(_savedEditPagesState));
    localStorage.setItem(EDIT_WORKOUT_KEY, String(_savedEditWorkoutState));
    updateEditPagesUI(_savedEditPagesState);
    updateEditWorkoutUI(_savedEditWorkoutState);
}

const tutorialSteps = [
    {
        id: 1,
        page: 'workouts',
        highlight: '#bottomNav',
        text: 'Это главное меню, здесь есть три раздела:\nстатистика, тренировки и профиль.',
        action: () => {
            activeWorkoutsTab = 'ready';
            applyWorkoutsTab('ready');
        }
    },
    {
        id: 2,
        page: 'stats',
        highlight: ['#page-stats .tab-btn[data-tab="personal"]', '#page-stats .tab-btn[data-tab="world"]'],
        text: 'Статистика делится на два раздела:\nМировая и Личная.',
        action: () => { switchStatsTab('personal'); }
    },
    {
        id: 3,
        page: 'stats',
        highlight: ['#page-stats .tab-btn[data-tab="personal"]', '.stat-card'],
        text: 'В личной статистике собрана вся информация о ваших тренировках.\nКоличество тренировок, минут, упражнений, распределение по группам мышц и категориям, календарь и история - всё в одном месте.'
    },
    {
        id: 4,
        page: 'stats',
        highlight: '#page-stats .tab-btn[data-tab="world"]',
        text: 'В мировом разделе вы можете увидеть рейтинг всех пользователей и отдельно рейтинг ваших друзей.\nСоревнуйтесь и поднимайтесь выше!',
        action: () => { switchStatsTab('world'); }
    },
    {
        id: 5,
        page: 'workouts',
        highlight: ['#page-workouts .tab-btn[data-tab="ready"]', '#page-workouts .tab-btn[data-tab="my"]'],
        text: 'Страница тренировок делится на два раздела:\nГотовые и Личные.'
    },
    {
        id: 6,
        page: 'workouts',
        highlight: ['#page-workouts .tab-btn[data-tab="ready"]', '.item-card[data-category="Руки"]'],
        text: 'Здесь уже собраны готовые тренировки.',
        action: () => {
            activeWorkoutsTab = 'ready';
            applyWorkoutsTab('ready');
        }
    },
    {
        id: 7,
        page: 'level-select',
        highlight: '.item-card',
        text: 'Каждая тренировка разделена на 3 уровня сложности.\nНачинайте с первого и постепенно прогрессируйте.',
        action: () => {
            window.navigateTo('level-select', { category: 'Руки' });
        }
    },
    {
        id: 8,
        page: 'workout-detail',
        highlight: '#actionButton',
        text: 'После выбора уровня сложности вы видите список упражнений.\nНажмите "Начать тренировку" и приступайте к занятиям.',
        action: () => {
            window.navigateTo('workout-detail', {
                category: 'Руки',
                level: '1 LVL',
                parentCategory: 'Силовые'
            });
        }
    },
    {
        id: 9,
        page: 'workout-detail',
        highlight: '#editWorkoutBtn',
        text: 'Можете редактировать любую тренировку:\nменять название, добавлять и удалять упражнения.',
        action: () => {
            const editWorkoutBtn = document.getElementById('editWorkoutBtn');
            if (editWorkoutBtn) {
                editWorkoutBtn.style.display = 'block';
            }
        }
    },
    {
        id: 10,
        page: 'workout-detail',
        highlight: null,
        text: 'Важно: честно отмечайте выполненные упражнения и регулируйте количество подходов и повторений под себя.\nОт этого зависит точность расчёта XP и ваша статистика.'
    },
    {
        id: 11,
        page: 'workouts',
        highlight: ['#page-workouts .tab-btn[data-tab="my"]', '.custom-workout .btn-primary'],
        text: 'В разделе "Личные" вы можете создавать свои собственные тренировки и редактировать их.',
        action: () => {
            activeWorkoutsTab = 'my';
            applyWorkoutsTab('my');
        }
    },
    {
        id: 12,
        page: 'profile',
        highlight: [ '.profile-tab-btn[data-tab="my"]', '.profile-tab-btn[data-tab="friends"]'],
        text: 'Профиль делится на два раздела:\nМой и Друзья.'
    },
    {
    id: 13,
    page: 'profile',
    highlight: '.profile-card',
    text: 'Это ваш профиль :)'
    },
    {
        id: 14,
        page: 'profile',
        highlight: '.level-block',
        text: 'Это система уровней.\nТренируйтесь, получайте XP и повышайте свой уровень.\nСоревнуйтесь с друзьями и другими пользователями!'
    },
    {
        id: 15,
        page: 'profile',
        highlight: '#settings-block-main .settings-block',
        text: 'В дополнительных настройках вы можете настроить приложение под себя.'
    },
    {
        id: 16,
        page: 'profile',
        highlight: '#dangerSettings .settings-block',
        text: 'Здесь находятся важные настройки.\nБудьте внимательны - эти действия нельзя отменить.'
    },
    {
        id: 17,
        page: 'profile',
        highlight: ['.profile-tab-btn[data-tab="friends"]', '.friends-list-block'],
        text: 'В разделе "Друзья" вы можете находить друзей, отправлять заявки и следить за их прогрессом в рейтинге.',
        action: () => {
            switchProfileTab('friends');
            renderFriendsInProfile();
        }
    },
    {
        id: 18,
        page: 'workouts',
        highlight: null,
        text: 'И главное правило!\nОтмечайте только те упражнения, которые действительно выполнили.\nНастраивайте подходы и повторения под себя.\nТренируйтесь с умом и достигайте целей!',
        isLast: true,
        action: () => {
            activeWorkoutsTab = 'ready';
            applyWorkoutsTab('ready');
        }
    }
];

// ===================PREMIUM ===================
const PREMIUM_KEY = 'sportapp_premium';

function hasPremium() {
    return localStorage.getItem(PREMIUM_KEY) === 'true';
}

function openPremiumModal() {
    openModal('premiumModal');
}

function closePremiumModal() {
    closeModal('premiumModal');
}

function openPremiumActiveModal() {
    openModal('premiumActiveModal');
}

function closePremiumActiveModal() {
    closeModal('premiumActiveModal');
}

function buyPremium() {
    localStorage.setItem(PREMIUM_KEY, 'true');
    closePremiumModal();
    updatePremiumUI();
    showToast('👑 Поздравляем! PREMIUM активирован!');
    setTimeout(() => openPremiumActiveModal(), 300);
}

function updatePremiumUI() {
    const premium = hasPremium();
    const statusEl = document.getElementById('premiumStatus');
    if (statusEl) {
        statusEl.textContent = premium ? 'Активирован' : 'Откройте все особые тренировки';
    }
    const icon = document.querySelector('.settings-item .fa-crown');
    if (icon) {
        icon.className = 'fa-solid fa-crown';
        icon.style.color = '#F7C948';
    }
    document.querySelectorAll('.item-card[data-premium="true"]').forEach(card => {
        card.style.display = 'flex';
    });
}

function checkPremiumAndNavigate(category) {
    if (!hasPremium()) {
        openPremiumModal();
        return;
    }
    window.navigateTo('level-select', { category: category });
}

function handlePremiumClick() {
    if (hasPremium()) {
        openModal('premiumActiveModal');
    } else {
        openModal('premiumModal');
    }
}

// ===================ВЫБОР ЦВЕТА ЧЕРЕЗ МОДАЛЬНОЕ ОКНО ===================
function openColorModal() {
    const currentColor = localStorage.getItem('themeColor') || 'red';
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.toggle('color-btn-active', btn.dataset.color === currentColor);
    });
    openModal('colorModal');
}

function closeColorModal() {
    closeModal('colorModal');
}

document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const color = this.dataset.color;
        document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('color-btn-active'));
        this.classList.add('color-btn-active');
        setTheme(color);
        updateColorStatus(color);
    });
});

// ===================НАСТРОЙКИ РЕДАКТИРОВАНИЯ ===================
const EDIT_PAGES_KEY = 'editPagesEnabled';
const EDIT_WORKOUT_KEY = 'editWorkoutEnabled';

function loadEditSettings() {
    const pagesEnabled = localStorage.getItem(EDIT_PAGES_KEY) !== 'false';
    updateEditPagesUI(pagesEnabled);

    const workoutEnabled = localStorage.getItem(EDIT_WORKOUT_KEY) !== 'false';
    updateEditWorkoutUI(workoutEnabled);
}

function updateEditPagesUI(enabled) {
    const statusEl = document.getElementById('editPagesStatus');
    if (statusEl) statusEl.textContent = enabled ? 'Включено' : 'Выключено';

    const editStatsBtn = document.getElementById('editStatsBtn');
    const editWorkoutsBtn = document.getElementById('editWorkoutsBtn');
    if (editStatsBtn) editStatsBtn.style.display = enabled ? 'block' : 'none';
    if (editWorkoutsBtn) editWorkoutsBtn.style.display = enabled ? 'block' : 'none';
}

function updateEditWorkoutUI(enabled) {
    const statusEl = document.getElementById('editWorkoutStatus');
    if (statusEl) statusEl.textContent = enabled ? 'Включено' : 'Выключено';

    const editWorkoutBtn = document.getElementById('editWorkoutBtn');
    if (editWorkoutBtn) {
        const pageWorkoutDetail = document.getElementById('page-workout-detail');
        if (pageWorkoutDetail && pageWorkoutDetail.classList.contains('page-active')) {
            const isPremium = window._currentIsPremium || false;
            if (!enabled || isPremium) {
                editWorkoutBtn.style.display = 'none';
            } else {
                editWorkoutBtn.style.display = 'block';
            }
        }
    }
}

function toggleEditPages() {
    const current = localStorage.getItem(EDIT_PAGES_KEY) !== 'false';
    const newState = !current;
    showConfirmModal(
        newState ? 'Включить редактирование страниц?' : 'Выключить редактирование страниц?',
        newState
            ? 'Кнопки "Редактировать страницу" снова появятся в статистике и тренировках.'
            : 'Кнопки "Редактировать страницу" будут скрыты в статистике и тренировках.',
        function() {
            localStorage.setItem(EDIT_PAGES_KEY, String(newState));
            updateEditPagesUI(newState);
            showToast(`✅ Редактирование страниц ${newState ? 'включено' : 'выключено'}`);
        },
        newState ? 'Включить' : 'Выключить'
    );
}

function toggleEditWorkout() {
    const current = localStorage.getItem(EDIT_WORKOUT_KEY) !== 'false';
    const newState = !current;
    showConfirmModal(
        newState ? 'Включить редактирование тренировок?' : 'Выключить редактирование тренировок?',
        newState
            ? 'Кнопка "Редактировать тренировку" снова появится на странице деталей тренировки.'
            : 'Кнопка "Редактировать тренировку" будет скрыта на странице деталей тренировки.',
        function() {
            localStorage.setItem(EDIT_WORKOUT_KEY, String(newState));
            updateEditWorkoutUI(newState);
            showToast(`✅ Редактирование тренировок ${newState ? 'включено' : 'выключено'}`);
        },
        newState ? 'Включить' : 'Выключить'
    );
}

// ===================ИНИЦИАЛИЗАЦИЯ ===================
document.addEventListener('DOMContentLoaded', function() {
    console.log('SportApp загружен!');
    
    // 1. Очистка сессионных данных
    shownThisSession.clear();
    
    // 2. PREMIUM UI
    updatePremiumUI();
    
    // 3. Синхронизация при наличии интернета
    if (navigator.onLine) {
        syncPendingWorkouts();
    }
    
    // 4. Цветовая тема
    const currentColor = localStorage.getItem('themeColor') || 'red';
    updateColorStatus(currentColor);

    // 5. Настройки редактирования
    loadEditSettings();
    
    // 6. Аккордеон
    initAccordion();

    // 7. Состояние блоков
    setTimeout(loadBlocksState, 1000);
    
    // 9. Pull-to-refresh
    initPullToRefresh();

    // 10. Применить сохраненный порядок
    applySavedWorldStatsOrder();
    
    // 11. Применяем сохранённые вкладки
    setTimeout(() => {
        TabManager.applyAll();
    }, 100);

    setTimeout(() => {
    listenForInvites();
}, 1000);
});

// ===================МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ С ПАРОЛЕМ ===================
function showConfirmWithPasswordModal(title, message, onConfirm, confirmText = 'Да') {
    const oldModal = document.getElementById('confirmModal');
    if (oldModal) oldModal.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'confirmModal';
    overlay.innerHTML = `
        <div class="modal-content" style="max-width:420px; width:95%;">
            <div class="modal-title">${title}</div>
            <p style="color:var(--slate); font-size:0.95rem; margin:0.5rem 0 1rem 0; text-align:center;">${message}</p>
            <div class="form-group" style="text-align:left; margin-bottom:1rem;">
                <label class="form-label">Введите пароль</label>
                <input type="password" id="confirmPassword" class="form-input" placeholder="Пароль" autocomplete="new-password" />
            </div>
            <div style="display:flex; gap:0.8rem;">
                <button class="btn btn-danger" id="confirmYes" style="flex:1;">${confirmText}</button>
                <button class="btn btn-primary" id="confirmNo" style="flex:1;">Нет</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById('confirmYes').addEventListener('click', async function() {
        const passwordInput = document.getElementById('confirmPassword');
        const password = passwordInput.value.trim();
        if (!password) {
            showToast('⚠️ Введите пароль');
            passwordInput.classList.add('error');
            return;
        }
        passwordInput.classList.remove('error');

        const user = await getFirebaseUser();
        if (!user) {
            showToast('❌ Пользователь не авторизован');
            overlay.remove();
            return;
        }

        try {
            const credential = firebase.auth.EmailAuthProvider.credential(user.email, password);
            await user.reauthenticateWithCredential(credential);
            overlay.remove();
            if (typeof onConfirm === 'function') onConfirm();
        } catch (error) {
            console.error('Ошибка аутентификации:', error);
            showToast('❌ Неверный пароль');
            overlay.remove();
        }
    });

    document.getElementById('confirmNo').addEventListener('click', function() {
        overlay.remove();
    });
}

// ===================МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ (БЕЗ ПАРОЛЯ) ===================
function showConfirmModal(title, message, onConfirm, confirmText = 'Да') {
    const oldModal = document.getElementById('confirmModal');
    if (oldModal) oldModal.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'confirmModal';
    overlay.innerHTML = `
        <div class="modal-content" style="max-width:420px; width:95%;">
            <div class="modal-title">${title}</div>
            <p style="color:var(--slate); font-size:0.95rem; margin:0.5rem 0 1.5rem 0; text-align:center;">${message}</p>
            <div style="display:flex; gap:0.8rem;">
                <button class="btn btn-primary" id="confirmYes" style="flex:1;">${confirmText}</button>
                <button class="btn btn-secondary" id="confirmNo" style="flex:1;">Нет</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById('confirmYes').addEventListener('click', function() {
        overlay.remove();
        if (typeof onConfirm === 'function') onConfirm();
    });

    document.getElementById('confirmNo').addEventListener('click', function() {
        overlay.remove();
    });
}

// ===================НЕВОЗВРАТНЫЕ НАСТРОЙКИ ===================
function confirmResetProgress() {
    showConfirmWithPasswordModal(
        'Сбросить прогресс?',
        'Это действие безвозвратно удалит статистику тренировок и обнулит прогресс.',
        resetProgress,
        'Сбросить'
    );
}

async function resetProgress() {
    const user = await getFirebaseUser();
    if (!user) {
        showToast('❌ Пользователь не авторизован');
        return;
    }

    try {
        const workoutsResult = await getUserWorkoutsFromFirestore(user.uid);
        if (workoutsResult.success) {
            const workouts = workoutsResult.data;
            for (const workout of workouts) {
                await firebase.firestore().collection('workouts').doc(workout.id).delete();
            }
            console.log(`✅ Удалено ${workouts.length} выполненных тренировок`);
        }

        await updateUserProfile(user.uid, { totalXp: 0 });

        const theme = localStorage.getItem('themeColor') || 'red';
        const premium = localStorage.getItem(PREMIUM_KEY) || 'false';
        
        const exercisesDataRaw = localStorage.getItem(STORAGE_KEY);
        const myWorkouts = localStorage.getItem('myCustomWorkouts');
        const pendingWorkouts = localStorage.getItem('pendingWorkouts');

        localStorage.clear();

        localStorage.setItem('themeColor', theme);
        localStorage.setItem(PREMIUM_KEY, premium);
        
        if (exercisesDataRaw) {
            localStorage.setItem(STORAGE_KEY, exercisesDataRaw);
        }
        
        if (myWorkouts) {
            localStorage.setItem('myCustomWorkouts', myWorkouts);
        }
        
        if (pendingWorkouts) {
            localStorage.setItem('pendingWorkouts', pendingWorkouts);
        }

        showToast('✅ Статистика сброшена');
        setTimeout(() => {
            window.location.reload();
        }, 500);
    } catch (error) {
        console.error('Ошибка сброса прогресса:', error);
        alert('Ошибка при сбросе прогресса: ' + error.message);
    }
}

function confirmDeleteAccount() {
    showConfirmWithPasswordModal(
        'Удалить аккаунт?',
        'Это действие безвозвратно удалит ваш профиль и все данные.',
        deleteAccount,
        'Удалить'
    );
}

async function deleteAccount() {
    const user = await getFirebaseUser();
    if (!user) {
        showToast('❌ Пользователь не авторизован');
        return;
    }

    try {
        await firebase.firestore().collection('users').doc(user.uid).delete();

        const workoutsResult = await getUserWorkoutsFromFirestore(user.uid);
        if (workoutsResult.success) {
            const workouts = workoutsResult.data;
            for (const workout of workouts) {
                await firebase.firestore().collection('workouts').doc(workout.id).delete();
            }
        }

        await user.delete();

        localStorage.clear();

        showToast('✅ Аккаунт удалён');
        setTimeout(() => {
            window.location.reload();
        }, 500);
    } catch (error) {
        console.error('Ошибка удаления аккаунта:', error);
        if (error.code === 'auth/requires-recent-login') {
            showToast('⚠️ Для удаления аккаунта требуется повторный вход.');
            await firebase.auth().signOut();
        } else {
            showToast('❌ Ошибка при удалении аккаунта: ' + error.message);
        }
    }
}

// ===================УНИВЕРСАЛЬНАЯ СИСТЕМА РЕДАКТИРОВАНИЯ СТРАНИЦ ===================
class PageEditor {
    constructor(config) {
        this.pageId = config.pageId;
        this.storageKey = config.storageKey;
        this.defaultLayout = config.defaultLayout || {};
        this.containers = config.containers || [];
        this.isEditing = false;
        this.sortableInstances = [];
        this.backupLayout = null;
        this.blockedClickHandler = null;

        this.editBtn = document.getElementById(config.editBtnId);
        this.saveBtn = document.getElementById(config.saveBtnId);
        this.cancelBtn = document.getElementById(config.cancelBtnId);
        this.resetBtn = document.getElementById(config.resetBtnId);
        this.actionsContainer = document.getElementById(config.actionsId);

        this.init();
    }

    init() {
        this.loadLayout();
        this.bindEvents();
    }

    bindEvents() {
        if (this.editBtn) this.editBtn.addEventListener('click', () => this.enableEdit());
        if (this.saveBtn) this.saveBtn.addEventListener('click', () => this.save());
        if (this.cancelBtn) this.cancelBtn.addEventListener('click', () => this.cancel());
        if (this.resetBtn) this.resetBtn.addEventListener('click', () => this.reset());
    }

    loadLayout() {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
            try {
                const layout = JSON.parse(saved);
                this.applyLayout(layout);
                return;
            } catch (e) {}
        }
        this.applyLayout(this.defaultLayout);
    }

    applyLayout(layout) {
        this.containers.forEach(container => {
            const element = document.getElementById(container.id);
            if (!element) return;

            const items = layout[container.id] || [];
            if (items.length === 0) return;

            const childMap = {};
            Array.from(element.children).forEach(child => {
                const id = child.dataset[container.dataAttr];
                if (id) childMap[id] = child;
            });

            items.forEach(id => {
                if (childMap[id]) {
                    element.appendChild(childMap[id]);
                }
            });
        });
    }

    getCurrentLayout() {
        const layout = {};
        this.containers.forEach(container => {
            const element = document.getElementById(container.id);
            if (!element) return;

            const items = [];
            Array.from(element.children).forEach(child => {
                const id = child.dataset[container.dataAttr];
                if (id) items.push(id);
            });
            layout[container.id] = items;
        });
        return layout;
    }

    enableEdit() {
        this.isEditing = true;
        this.backupLayout = this.getCurrentLayout();

        const page = document.getElementById(this.pageId);
        page.classList.add('editing');

        this.editBtn.style.display = 'none';
        this.actionsContainer.style.display = 'flex';

        this.blockNavigation();
        this.initSortables();

        showToast('✏️ Режим редактирования включен');
    }

    disableEdit(save = false) {
        this.isEditing = false;
        
        const page = document.getElementById(this.pageId);
        page.classList.remove('editing');

        this.editBtn.style.display = 'block';
        this.actionsContainer.style.display = 'none';

        this.unblockNavigation();
        this.destroySortables();

        if (!save && this.backupLayout) {
            this.applyLayout(this.backupLayout);
            this.backupLayout = null;
            showToast('↩️ Изменения отменены');
        }
    }

    save() {
        const layout = this.getCurrentLayout();
        localStorage.setItem(this.storageKey, JSON.stringify(layout));
        this.backupLayout = null;
        this.disableEdit(true);
        showToast('✅ Порядок сохранён');
    }

    cancel() {
        this.disableEdit(false);
    }

reset() {
    showConfirmModal(
        'Сбросить порядок?',
        'Вернуть стандартный порядок элементов?',
        () => {
            // 1. Удаляем сохранённый лейаут
            localStorage.removeItem(this.storageKey);
            
            // 2. Отключаем режим редактирования
            this.disableEdit(false);
            
            // 3. Применяем дефолтный лейаут
            this.applyLayout(this.defaultLayout);
            
            showToast('🔄 Порядок сброшен к стандартному');
        },
        'Сбросить'
    );
}

blockNavigation() {
    document.addEventListener('click', this.blockedClickHandler = (e) => {
        // ВСЕГДА пропускаем клики по модальным окнам и их элементам
        if (e.target.closest('.modal-overlay') || 
            e.target.closest('.modal-content') ||
            e.target.closest('#confirmModal')) {
            return;
        }

        // Исключаем все кнопки редактирования
        if (e.target.closest('#statsEditActions') ||
            e.target.closest('#workoutsEditActions') ||
            e.target.closest('#worldStatsEditActions') ||
            e.target.closest('#friendsEditActions') ||
            e.target.closest('#editStatsBtn') ||
            e.target.closest('#editWorkoutsBtn') ||
            e.target.closest('#editWorldStatsBtn') ||
            e.target.closest('#editFriendsBtn') ||
            e.target.closest('#saveStatsBtn') ||
            e.target.closest('#saveWorkoutsBtn') ||
            e.target.closest('#saveWorldStatsBtn') ||
            e.target.closest('#saveFriendsBtn') ||
            e.target.closest('#cancelStatsBtn') ||
            e.target.closest('#cancelWorkoutsBtn') ||
            e.target.closest('#cancelWorldStatsBtn') ||
            e.target.closest('#cancelFriendsBtn') ||
            e.target.closest('#resetStatsBtn') ||
            e.target.closest('#resetWorkoutsBtn') ||
            e.target.closest('#resetWorldStatsBtn') ||
            e.target.closest('#resetFriendsBtn')) {
            return;
        }

        // Разрешаем перетаскивание
        if (e.target.closest('.section-drag') ||
            e.target.closest('.sortable-ghost') ||
            e.target.closest('.sortable-chosen')) {
            return;
        }

        // Блокируем навигацию и клики по элементам
        if (e.target.closest('.nav-item') ||
            e.target.closest('.tab-btn') ||
            e.target.closest('.item-card') ||
            e.target.closest('.btn-primary') ||
            e.target.closest('.btn-secondary') ||
            e.target.closest('.btn-danger') ||
            e.target.closest('.custom-workout .btn-primary') ||
            e.target.closest('.friend-delete-btn') ||
            e.target.closest('.workout-delete') ||
            e.target.closest('#editProfileBtn') ||
            e.target.closest('.settings-item')) {
            e.preventDefault();
            e.stopPropagation();
            showToast('⚠️ Сначала завершите редактирование страницы');
            return false;
        }
    }, true);
}

    unblockNavigation() {
        if (this.blockedClickHandler) {
            document.removeEventListener('click', this.blockedClickHandler, true);
            this.blockedClickHandler = null;
        }
    }

initSortables() {
    this.containers.forEach(container => {
        const element = document.getElementById(container.id);
        if (!element) return;

        let filter = container.filter || null;
        let handle = container.handle || null;

        // Для списков тренировок исключаем кнопки удаления
        if (['catalogGridStrength', 'catalogGridFitness', 'catalogGridPremium', 'myWorkoutsList'].includes(container.id)) {
            filter = '.workout-delete';
            handle = null;
        }

        const s = new Sortable(element, {
            animation: 150,
            handle: handle,
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            forceFallback: true,
            filter: filter,
            preventOnFilter: false,
            delay: 200,
            delayOnTouchOnly: true
        });
        this.sortableInstances.push(s);
    });
}

    destroySortables() {
        this.sortableInstances.forEach(s => s.destroy());
        this.sortableInstances = [];
    }
}

// ===================НАСТРОЙКА РЕДАКТОРОВ СТРАНИЦ ===================
window.statsEditor = new PageEditor({
    pageId: 'page-stats',
    storageKey: 'statsLayout',
    editBtnId: 'editStatsBtn',
    saveBtnId: 'saveStatsBtn',
    cancelBtnId: 'cancelStatsBtn',
    resetBtnId: 'resetStatsBtn',
    actionsId: 'statsEditActions',
    containers: [
        { id: 'statsSummary', dataAttr: 'statId', handle: '.stat-card' },
        { id: 'statsBlocksContainer', dataAttr: 'blockId', handle: '.section-drag' },
        { id: 'exerciseMuscleStats', dataAttr: 'muscleName', handle: '.stat-item' },
        { id: 'categoriesStats', dataAttr: 'categoryName', handle: '.stat-item' }
    ],
    defaultLayout: {
        statsSummary: ['workouts', 'minutes', 'exercises'],
        statsBlocksContainer: ['muscles', 'categories', 'calendar', 'history', 'world-leaderboard', 'friends-leaderboard'],
        exerciseMuscleStats: ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы'],
        categoriesStats: ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Ягодицы', 'Кардио', 'Гибкость', 'Всё тело']
    }
});

window.workoutsEditor = new PageEditor({
    pageId: 'page-workouts',
    storageKey: 'workoutsLayout',
    editBtnId: 'editWorkoutsBtn',
    saveBtnId: 'saveWorkoutsBtn',
    cancelBtnId: 'cancelWorkoutsBtn',
    resetBtnId: 'resetWorkoutsBtn',
    actionsId: 'workoutsEditActions',
    containers: [
        { id: 'workoutsBlocksContainer', dataAttr: 'blockId', handle: '.section-drag' },
        { id: 'catalogGridStrength', dataAttr: 'category' },
        { id: 'catalogGridFitness', dataAttr: 'category' },
        { id: 'catalogGridPremium', dataAttr: 'category' },
        { id: 'myWorkoutsList', dataAttr: 'workoutId' }
    ],
    defaultLayout: {
        workoutsBlocksContainer: ['strength', 'fitness', 'premium'],
        catalogGridStrength: ['Руки', 'Плечи', 'Пресс', 'Грудь', 'Спина', 'Ноги', 'Всё тело'],
        catalogGridFitness: ['Зарядка', 'Кардио', 'Пилатес', 'Растяжка'],
        catalogGridPremium: ['Кроссфит', 'Мужская сила', 'Женское счастье'],
        myWorkoutsList: []
    }
});

window.worldStatsEditor = new PageEditor({
    pageId: 'page-stats',
    storageKey: 'worldStatsLayout',
    editBtnId: 'editWorldStatsBtn',
    saveBtnId: 'saveWorldStatsBtn',
    cancelBtnId: 'cancelWorldStatsBtn',
    resetBtnId: 'resetWorldStatsBtn',
    actionsId: 'worldStatsEditActions',
    containers: [
        { id: 'worldStatsBlocksContainer', dataAttr: 'blockId', handle: '.section-drag' }
    ],
    defaultLayout: {
        'worldStatsBlocksContainer': ['world-leaderboard', 'friends-leaderboard']
    }
});

// ===================РЕДАКТОР СТРАНИЦЫ ДРУЗЕЙ ===================
window.friendsEditor = new PageEditor({
    pageId: 'page-profile',
    storageKey: 'friendsLayout',
    editBtnId: 'editFriendsBtn',
    saveBtnId: 'saveFriendsBtn',
    cancelBtnId: 'cancelFriendsBtn',
    resetBtnId: 'resetFriendsBtn',
    actionsId: 'friendsEditActions',
    containers: [
        { 
            id: 'profileTab-friends', 
            dataAttr: 'blockId', 
            handle: '.section-drag',
            filter: '#friendsEditButtons'   // <-- Игнорируем кнопки при сортировке
        }
    ],
    defaultLayout: {
        'profileTab-friends': ['friends-search', 'friends-list', 'friend-requests']
    }
});

// Обновляем функцию renderFriendsInProfile, чтобы она применяла сохранённый порядок
const originalRenderFriends = renderFriendsInProfile;
renderFriendsInProfile = async function() {
    await originalRenderFriends();
    setTimeout(() => {
        const layout = JSON.parse(localStorage.getItem('friendsLayout'));
        if (!layout) return;
        const container = document.getElementById('profileTab-friends');
        if (!container) return;
        const items = layout['profileTab-friends'] || [];
        if (items.length === 0) return;
        const childMap = {};
        container.querySelectorAll('.section-block').forEach(el => {
            const id = el.dataset.blockId;
            if (id) childMap[id] = el;
        });
        items.forEach(id => {
            if (childMap[id]) {
                container.appendChild(childMap[id]);
            }
        });
    }, 200);
};

document.getElementById('resetWorkoutsBtn')?.addEventListener('click', function() {
    showConfirmModal(
        'Сбросить порядок?',
        'Вернуть стандартный порядок элементов на странице тренировок?',
        function() {
            const defaultLayout = getDefaultWorkoutsLayout();
            saveWorkoutsLayout(defaultLayout);
            applySavedWorkoutsOrder();
            if (window.workoutsEditor) {
                window.workoutsEditor.destroySortables();
                window.workoutsEditor.initSortables();
            }
            showToast('🔄 Порядок сброшен к стандартному');
        },
        'Сбросить'
    );
});

document.getElementById('resetStatsBtn')?.addEventListener('click', function() {
    showConfirmModal(
        'Сбросить порядок?',
        'Вернуть стандартный порядок элементов на странице статистики?',
        function() {
            const defaultLayout = getDefaultStatsLayout();
            saveStatsLayout(defaultLayout);
            applySavedStatsOrder();
            if (window.statsEditor) {
                window.statsEditor.destroySortables();
                window.statsEditor.initSortables();
            }
            showToast('🔄 Порядок сброшен к стандартному');
        },
        'Сбросить'
    );
});

// ===================АККОРДЕОН ===================
function initAccordion() {
    document.querySelectorAll('.section-block').forEach(block => {
        const header = block.querySelector('.section-header');
        if (!header) return;

        if (header._accordionHandler) {
            header.removeEventListener('click', header._accordionHandler);
        }

        const handler = function(e) {
            if (e.target.closest('.section-drag')) return;
            block.classList.toggle('open');
        };

        header._accordionHandler = handler;
        header.addEventListener('click', handler);
    });
}

// ===================ОТКРЫТИЕ ВСЕХ БЛОКОВ ДЛЯ НОВЫХ ПОЛЬЗОВАТЕЛЕЙ ===================
function initProfileBlocks() {
    const isNewUser = localStorage.getItem('profileBlocksInitialized') !== 'true';
    if (isNewUser) {
        setTimeout(() => {
            const blocks = document.querySelectorAll('.section-block');
            blocks.forEach(block => block.classList.add('open'));
            localStorage.setItem('profileBlocksInitialized', 'true');
            saveBlocksState();
        }, 500);
    } else {
        setTimeout(loadBlocksState, 500);
    }
}

// ===================СОХРАНЕНИЕ СОСТОЯНИЯ БЛОКОВ ===================
function saveBlocksState() {
    const blocks = document.querySelectorAll('.section-block');
    const state = {};
    blocks.forEach((block, index) => {
        const id = block.dataset.blockId || index;
        state[id] = block.classList.contains('open');
    });
    localStorage.setItem('blocksState', JSON.stringify(state));
}

function loadBlocksState() {
    const saved = localStorage.getItem('blocksState');
    if (!saved) return;

    try {
        const state = JSON.parse(saved);
        const blocks = document.querySelectorAll('.section-block');
        blocks.forEach((block, index) => {
            const id = block.dataset.blockId || index;
            if (state[id] === true) {
                block.classList.add('open');
            }
        });
    } catch (e) {}
}

window.addEventListener('load', function() {
    setTimeout(loadBlocksState, 500);
});

// ===================СТРАНИЦА ФИНИШ ===================
function showFinishPage(exercisesCount, completedCount, seconds, xpEarned) {
    document.getElementById('finishExercises').textContent = `${completedCount}/${exercisesCount}`;
    
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById('finishMinutes').textContent = `${mins}:${secs}`;
    document.getElementById('finishXp').textContent = `+${Math.round(xpEarned)} XP`;
    
    document.querySelectorAll('#finishStars i').forEach(star => star.classList.remove('active'));
    
    window.navigateTo('finish');
}

// ===================ЗВЁЗДЫ ===================
document.querySelectorAll('#finishStars i').forEach(star => {
    star.addEventListener('click', function() {
        const value = parseInt(this.dataset.value);
        document.querySelectorAll('#finishStars i').forEach(s => {
            s.classList.toggle('active', parseInt(s.dataset.value) <= value);
        });
    });
});

// ===================КНОПКА "ЗАКОНЧИТЬ" ===================
document.getElementById('finishDoneBtn')?.addEventListener('click', async function() {
    if (!preventDoubleClick('finishDoneBtn', 3000)) {
        showToast('⏳ Подождите, тренировка уже сохраняется...');
        return;
    }

    const btn = this;
    btn.disabled = true;
    btn.textContent = 'Закончить';
    btn.style.opacity = '1';

    try {
        const xpText = document.getElementById('finishXp').textContent;
        const xpEarned = parseFloat(xpText) || 0;

        let finalCategory = sessionCategory;
        if (!finalCategory || finalCategory === 'Без категории') {
            const title = sessionWorkoutTitle || '';
            if (title.includes('Руки')) finalCategory = 'Руки';
            else if (title.includes('Плечи')) finalCategory = 'Плечи';
            else if (title.includes('Пресс')) finalCategory = 'Пресс';
            else if (title.includes('Грудь')) finalCategory = 'Грудь';
            else if (title.includes('Спина')) finalCategory = 'Спина';
            else if (title.includes('Ноги')) finalCategory = 'Ноги';
            else if (title.includes('Кардио')) finalCategory = 'Кардио';
            else if (title.includes('Растяжка')) finalCategory = 'Гибкость';
            else if (title.includes('Пилатес') || title.includes('Кроссфит') || title.includes('Всё тело')) finalCategory = 'Всё тело';
            else if (title.includes('Мужская сила') || title.includes('Женское счастье')) finalCategory = 'Ягодицы';
            else finalCategory = 'Без категории';
        }

        const workoutExercises = sessionExercises.map((ex, index) => ({
            ...ex,
            icon: ex.icon || 'bodybuilding',
            completed: sessionCompleted.has(index)
        }));

        // ИКОНКА ТРЕНИРОВКИ — ИСПОЛЬЗУЕМ СОХРАНЁННУЮ В СЕССИИ
        const workoutIcon = sessionWorkoutIcon || 'bodybuilding';

        const workoutData = {
            title: sessionWorkoutTitle || 'Тренировка',
            date: new Date().toISOString(),
            durationSeconds: sessionSeconds,
            exercises: workoutExercises,
            xpEarned: xpEarned,
            category: finalCategory,
            icon: workoutIcon
        };

        console.log('Сохраняем тренировку с иконкой:', workoutData.icon);

        const user = await getFirebaseUser();
        if (user) {
            const result = await saveWorkoutToFirestore(user.uid, workoutData);
            if (result.success) {
                const profileResult = await getUserProfile(user.uid);
                if (profileResult.success) {
                    const currentXp = profileResult.data.totalXp || 0;
                    await updateUserProfile(user.uid, { totalXp: currentXp + xpEarned });
                }
                showToast('💾 Тренировка сохранена');
            } else {
                addPendingWorkout(workoutData);
                showToast('⚠️ Тренировка сохранена локально, синхронизация позже');
            }
        } else {
            addPendingWorkout(workoutData);
            showToast('⚠️ Тренировка сохранена локально');
        }

        sessionExercises = [];
        sessionCompleted = new Set();
        sessionSeconds = 0;
        sessionWorkoutTitle = '';
        sessionCategory = '';
        sessionWorkoutIcon = 'bodybuilding';
        
        window.navigateTo('workouts');
        
    } catch (error) {
        console.error('Ошибка сохранения:', error);
        showToast('❌ Ошибка сохранения тренировки');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Закончить';
        btn.style.opacity = '1';
    }
});

// =================== ПОЛУЧЕНИЕ ИКОНКИ УПРАЖНЕНИЯ ===================
function getExerciseIcon(exerciseName) {
    // Сначала ищем в exercisesData
    for (const parent in exercisesData) {
        if (typeof exercisesData[parent] === 'object') {
            for (const subCategory in exercisesData[parent]) {
                if (typeof exercisesData[parent][subCategory] === 'object') {
                    if (exercisesData[parent][subCategory]._premium) continue;
                    for (const level in exercisesData[parent][subCategory]) {
                        const levelData = exercisesData[parent][subCategory][level];
if (Array.isArray(levelData)) {
    const found = levelData.find(e => e.name === exerciseName);
    if (found && found.icon) return found.icon;
} else if (levelData && typeof levelData === 'object' && levelData._exercises) {
    const found = levelData._exercises.find(e => e.name === exerciseName);
    if (found && found.icon) return found.icon;
}
                    }
                }
            }
        }
    }
    return 'bodybuilding';
}

// =================== ФУНКЦИЯ ПОЛУЧЕНИЯ КАТЕГОРИИ ПО ИКОНКЕ ===================
function getCategoryByIcon(icon) {
    return ICON_TO_CATEGORY[icon] || 'Без категории';
}

// ===================ПРОФИЛЬ ДРУГА ===================
let currentFriendId = null;
let currentFriendData = null;

async function openFriendProfile(friendId) {
    currentFriendId = friendId;
    
    try {
        const result = await getUserProfile(friendId);
        if (!result.success) {
            showToast('❌ Не удалось загрузить данные друга');
            return;
        }
        
        currentFriendData = result.data;
        
        const workoutsResult = await getUserWorkoutsFromFirestore(friendId);
        let workouts = [];
        let totalSeconds = 0;
        let totalExercises = 0;
        
        if (workoutsResult.success) {
            workouts = workoutsResult.data.filter(w => !(w.title || '').includes('Зарядка'));
            totalSeconds = workouts.reduce((sum, w) => sum + (w.durationSeconds || 0), 0);
            totalExercises = workouts.reduce((sum, w) => {
                const completed = w.exercises?.filter(e => e.completed === true).length || 0;
                return sum + completed;
            }, 0);
        }
        
        const name = currentFriendData.displayName || 'Пользователь';
        document.getElementById('friendProfileName').textContent = name;
        document.getElementById('friendProfileEmail').textContent = currentFriendData.email || 'email не указан';
        
        const xp = currentFriendData.totalXp || 0;
        const currentLevel = getCurrentLevel(xp);
        const progress = getXpProgress(xp);
        const nextLevel = getNextLevel(xp);
        const progressText = nextLevel ? `${xp.toFixed(1)}/${nextLevel.minXp} XP` : `${xp.toFixed(1)}+ XP`;
        
        document.getElementById('friendLevelLvl').textContent = currentLevel.id + ' LVL';
        document.getElementById('friendLevelTitle').textContent = currentLevel.name;
        document.getElementById('friendLevelProgressText').textContent = progressText;
        document.getElementById('friendLevelFill').style.width = progress + '%';
        
        document.getElementById('friendTotalWorkouts').textContent = workouts.length;
        document.getElementById('friendTotalMinutes').textContent = Math.floor(totalSeconds / 60);
        document.getElementById('friendTotalExercises').textContent = totalExercises;
        
        openModal('friendProfileModal');
        
    } catch (error) {
        console.error('Ошибка загрузки профиля друга:', error);
        showToast('❌ Ошибка загрузки профиля друга');
    }
}

document.getElementById('friendProfileCloseBtn')?.addEventListener('click', function() {
    closeModal('friendProfileModal');
    currentFriendId = null;
    currentFriendData = null;
});

document.getElementById('friendRemoveBtn')?.addEventListener('click', function() {
    if (!currentFriendId || !currentFriendData) {
        showToast('❌ Данные друга не загружены');
        return;
    }
    
    const friendName = currentFriendData.displayName || 'Пользователь';
    
    showConfirmModal(
        'Удалить друга?',
        `Вы уверены, что хотите удалить ${friendName} из друзей?`,
        async function() {
            const result = await removeFriendFromList(currentFriendId);
            if (result.success) {
                closeModal('friendProfileModal');
                currentFriendId = null;
                currentFriendData = null;
                await renderFriendsInProfile();
                showToast(`✅ ${result.friendName || friendName} удалён из друзей`);
            }
        },
        'Удалить'
    );
});

async function removeFriendFromList(friendId) {
    const user = await getFirebaseUser();
    if (!user) {
        showToast('❌ Пользователь не авторизован');
        return false;
    }
    
    try {
        const friendProfile = await getUserProfile(friendId);
        const friendName = friendProfile.success ? friendProfile.data.displayName : 'Пользователь';
        
        const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
        const currentFriends = userDoc.data()?.friends || [];
        const updatedFriends = currentFriends.filter(id => id !== friendId);
        await firebase.firestore().collection('users').doc(user.uid).update({ friends: updatedFriends });
        
        const friendDoc = await firebase.firestore().collection('users').doc(friendId).get();
        const friendFriends = friendDoc.data()?.friends || [];
        const updatedFriendFriends = friendFriends.filter(id => id !== user.uid);
        await firebase.firestore().collection('users').doc(friendId).update({ friends: updatedFriendFriends });
        
        const shownFriendNotifications = JSON.parse(localStorage.getItem('shownFriendNotifications') || '[]');
        const updatedShown = shownFriendNotifications.filter(id => id !== friendId);
        localStorage.setItem('shownFriendNotifications', JSON.stringify(updatedShown));
        
        const prevFriends = JSON.parse(localStorage.getItem('prevFriendsList') || '[]');
        const updatedPrev = prevFriends.filter(f => f.id !== friendId);
        localStorage.setItem('prevFriendsList', JSON.stringify(updatedPrev));
        
        return { success: true, friendName: friendName };
    } catch (error) {
        console.error('Ошибка удаления друга:', error);
        showToast('❌ Ошибка при удалении друга');
        return { success: false };
    }
}

// ===================ОБНОВЛЕНИЕ ТОЛЬКО СТРАНИЦ С УВЕДОМЛЕНИЯМИ ===================
function refreshNotificationData() {
    renderFriendsInProfile();
    loadWorldLeaderboard();
    loadFriendsLeaderboard();
    loadProfile();
    
    console.log('✅ Страницы с уведомлениями обновлены');
}

// ===================ЕДИНЫЙ ОБРАБОТЧИК ВСЕХ КЛИКОВ ===================
document.addEventListener('click', function(e) {
    // 1. Сохранение состояния блоков (аккордеон)
    const header = e.target.closest('.section-header');
    if (header) {
        const block = header.closest('.section-block');
        if (block) {
            setTimeout(saveBlocksState, 100);
        }
    }

    // 2. Клик по навигации (нижнее меню)
    const navItem = e.target.closest('.nav-item');
    if (navItem) {
        setTimeout(refreshNotificationData, 300);
        return;
    }
    
    // 3. Клик по ЛЮБОЙ вкладке (статистика, тренировки, профиль)
    const tabBtn = e.target.closest('.tab-btn');
    if (tabBtn) {
        setTimeout(refreshNotificationData, 300);
        return;
    }
    
    // 4. Кнопка "Завершить тренировку"
    const finishBtn = e.target.closest('#finishDoneBtn');
    if (finishBtn) {
        setTimeout(refreshNotificationData, 1000);
        return;
    }
});
