 import {Subject} from 'rxjs'

document.addEventListener('click', () => {
	
	  const stream$ = new Subject()

	stream$.subscribe(value =>  console.log('Value:', value))

	stream$.next(  'Hello')
	stream$.next(  'Rx')
	stream$.next(  'Js')

})
