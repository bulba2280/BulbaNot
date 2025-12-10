const notepad = document.getElementById('notepad');
const downloadBtn = document.getElementById('downloadBtn');
const clearBtn = document.getElementById('clearBtn');

downloadBtn.addEventListener('click', () => {
    const text = notepad.value;
    
    if (!text.trim()) {
        alert('Добавь текст перед скачиванием');
        return;
    }
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = 'заметка.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

clearBtn.addEventListener('click', () => {
    if (notepad.value && confirm('Очистить блокнот?')) {
        notepad.value = '';
    }
});

notepad.focus();