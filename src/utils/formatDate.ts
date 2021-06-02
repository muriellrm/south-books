import moment from 'moment'

export default function formatDate(value: string) {    
    
    if(moment(value).month() < 1){
        return moment(value).format('YYYY');    
    }
    if(value.length < 8){
        return moment(value).format('MM/YYYY');    
    }

    return moment(value).format('DD/MM/YYYY');
}