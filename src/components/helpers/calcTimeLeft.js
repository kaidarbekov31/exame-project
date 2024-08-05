export function timeSince(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);

    const intervals = [
        { label: "лет", seconds: 31536000 },
        { label: "месяцев", seconds: 2592000 },
        { label: "дней", seconds: 86400 },
        { label: "часов", seconds: 3600 },
        { label: "минут", seconds: 60 },
        { label: "секунд", seconds: 1 },
    ];

    for (const interval of intervals) {
        const { label, seconds: intervalSeconds } = interval;
        const count = Math.floor(seconds / intervalSeconds);
        if (count > 0) {
            return count === 1 ? `1 ${label.slice(0, -2)}` : `${count} ${label}`;
        }
    }

    return "Только что";
}
