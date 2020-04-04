import {range, timer, interval} from 'rxjs'
import { scan, map } from 'rxjs/operators'

timer(2500).subscribe(v => console.log(v))

range( 42, 10).subscribe(value => console.log(value))
