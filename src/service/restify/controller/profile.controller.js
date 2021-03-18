
import ProfileModel from '../../../datalayer/models/mongo/profile'

class PROFILE {
    async storageDocument(document) {
        try {
            let newDocument = await ProfileModel.create(document)
            return newDocument
        } catch (error) {
            throw error
        }
    }
}

const profileController = new PROFILE()

export default profileController