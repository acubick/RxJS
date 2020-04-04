import {of} from 'rxjs'

//const stream$ = of(1, 2, 3, 4)
const stream$ = of('Hello', 'World')

stream$.subscribe(value => {
	console.log('Value:', value)
})
