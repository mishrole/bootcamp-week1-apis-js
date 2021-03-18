export const getLastExperienceFromExperiences = ([]) => {
    try {
        return {}
    } catch (error) {
        throw error
    }
}

export const allowOrigins = () => {
    const origins = process.env.ALLOW_ORIGINS_URLS || '';
  
    return origins.split(' ').filter((el) => el !== '');
  };
  