import {Router} from 'restify-router'

import profileController from '../controller/profile.controller'

const ProfileRouter = new Router()

ProfileRouter.post('/storage', async (req, res)=> {
    try {
        const { body } = req

        const { document } = body

        let newDocument = await profileController.storageDocument(document)
        return res.json({
            data: newDocument,
            success: true
        })
    } catch (error) {
        return res.json({
            data: null,
            success: false,
            error: error.message
        })
    }
})

export default ProfileRouter