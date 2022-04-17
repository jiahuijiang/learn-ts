const user = {
    id: 42,
    isVerified: true,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

const {isVerified} = user;


function generateUserId({id, fullName: {firstName: name}}): string {
    return id + name;
}

type UserId = {id: number, fullName: {firstName: string}}
function generateUserId2({id, fullName: {firstName: name}}: UserId): string {
    return id + name;
}