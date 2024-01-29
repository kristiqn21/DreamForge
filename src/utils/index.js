import {surpriseMePrompts} from  "../constant"

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const getRandomPropmt= surpriseMePrompts[randomIndex];

    if(getRandomPropmt === prompt) return getRandomPropmt(prompt)

    return getRandomPropmt
}