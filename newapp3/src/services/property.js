import axios from 'axios'
import { config } from './config'


export async function getProperties(){
    try{
        const token = sessionStorage['token']
        const response = await axios.get(`${config.serverUrl}/property`, {
            headers: {token},
        })
        return response.data
    } catch(ex){
        console.log(`exception:`,ex)
    }
    return null
}

export async function addProperty( 
    title,
    contactNo,
    ownerName,
    details,
    address,
    guests,
    bedrooms,
    bathrooms,
    beds,
    rent,
    isLakeView,
    isTV,
    isAC,
    isWifi,
    isMiniBar,
    isBreakfast,
    isParking,
    image) {

        const body = new FormData()
        body.append('title', title)
        body.append('contactNo',contactNo)
        body.append('ownerName', ownerName)
        body.append('details', details)
        body.append('address', address)
        body.append('guests', guests)
        body.append('bedrooms', bedrooms)
        body.append('bathrooms', bathrooms)
        body.append('beds', beds)
        body.append('rent', rent)
        body.append('isLakeView', isLakeView ? 1:0)
        body.append('isTV', isTV ? 1:0)
        body.append('isAC', isAC ? 1:0)
        body.append('isWifi', isWifi ? 1:0)
        body.append('isMiniBar', isMiniBar ? 1:0)
        body.append('isBreakfast', isBreakfast ? 1:0)
        body.append('isParking', isParking ? 1 : 0)
        body.append('image', image)


        try{
            const token = sessionStorage['token']
            const response = await axios.post(`${config.serverUrl}/property/`, body,{
                headers: {token}
            })
            return response.data
        }catch(ex){
            console.log(`exception:`,ex)
        }
        return null
    } 
