import mongoose, {Schema} from 'mongoose'

const ProfileSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String}
}, {
    timestamps: true
})

const ProfileModel = mongoose.model('Profile', ProfileSchema )

export default ProfileModel