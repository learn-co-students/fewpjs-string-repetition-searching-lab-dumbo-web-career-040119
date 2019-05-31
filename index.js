// Code your solution here

let heyJude = (verse) => {
    return verse.repeat(16)
}

let prohibitedLanguage = (name) => {
    let banEx = /candycorn|brusselssprouts/;
    return name.search(banEx)
}