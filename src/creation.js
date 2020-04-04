import {range, timer, interval} from 'rxjs'
import { scan, map } from 'rxjs/operators'

const sub =  interval(500).subscribe(
	value => console.log(value)
)

setTimeout(()=>{
	 sub.unsubscribe()
}, 4000)
