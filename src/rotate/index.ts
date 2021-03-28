import * as functions from 'firebase-functions'
import Twitter from 'twitter'
import { readFileSync } from 'fs'
import path from 'path'
/**
 * ### You nedd set functions.config environment on cli. 
 * @example 
 * ```
 *  $ firebase functions:config:set twitter.apikey=<cunsumer_key> twitter.secret=<consumer_secret> twitter.token=<access_token> twitter.tokensecret=<access_token_secret>
 * ```
 */
export const onExecution = functions
  .pubsub.schedule('0 */1 * * *')
  .timeZone('Asia/Tokyo')
  .onRun(
    (_context) => 
      { 
            
        const client = new Twitter({
          consumer_key: functions.config().twitter.apikey,
          consumer_secret: functions.config().twitter.apisecret,
          access_token_key: functions.config().twitter.token,
          access_token_secret: functions.config().twitter.tokensecret,
        })

        const now = new Date(Date.now())
        const jpNow = now.toLocaleString('ja-JP',{ timeZone: 'Asia/Tokyo' })
        const jpHour = new Date(jpNow).getHours()

        const angle = ((jpHour % 12) * 30).toString();
        // you need set png image /resource  folder like img-0.png img-30.png img-60.png ... img-330.png
        const iconPath = path.resolve(__dirname,`../../resource/img-${angle}.png`)

        const rotateIcon =  readFileSync(iconPath,'base64')
  
        if(rotateIcon !== undefined) {
          client.post('account/update_profile_image',{image: rotateIcon},(error: string | undefined)=>{
            if(error) throw new Error(error)
          })
        }else if(rotateIcon === undefined){
          throw new Error('rotateIconがアンディファインド')
        }
      return null
    }
  )