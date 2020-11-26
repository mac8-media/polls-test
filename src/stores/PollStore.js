import { writable }from 'svelte/store';

const PollStore = writable([
    {
        id: 1,
        question: 'Whaleshark or Manta Ray?',
        answerA: 'Whaleshark',
        answerB: 'Manta Ray',
        votesA: 9,
        votesB: 15,
    },
]);

export default PollStore