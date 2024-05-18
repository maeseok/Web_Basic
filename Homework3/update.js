function updateUserProfile(userProfile,updates){
    const result={
        ...userProfile,
        ...updates
    }
    return result;
};

const userProfile={
    name:'Sara',
    age: 25,
    profession: 'Engineer'
};

const updates={
    age: 28,
    city: 'Berlin'
};



console.log(updateUserProfile(userProfile, updates));
