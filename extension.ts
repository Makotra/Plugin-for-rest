import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Создаем таймер с интервалом в 5 секунд
    const intervalInSeconds = 5;
    
    setInterval(() => {
        // Отображаем уведомление с кнопкой "Посмотреть упражнения"
        vscode.window.showInformationMessage(
            'Напоминание: сделайте небольшой перерыв!',
            'Посмотреть упражнения'
        ).then(selection => {
            // Если пользователь выбрал "Посмотреть упражнения"
            if (selection === 'Посмотреть упражнения') {
                // Открываем ссылку на упражнения
                vscode.env.openExternal(vscode.Uri.parse('https://yandex.ru/video/preview/10273850175884629028'));
            }
        });
    }, intervalInSeconds * 1000);
}

export function deactivate() {}