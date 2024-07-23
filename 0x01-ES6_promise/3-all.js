import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
        .then(([photoResponse, userResponse]) => {
            console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
        })
        .catch(() => {
            console.error("Signup system offline");
        });
}
