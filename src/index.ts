import * as admin from 'firebase-admin'
import * as rotate from './rotate'
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
})
export {rotate}