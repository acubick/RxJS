 import {Subject, BehaviorSubject} from 'rxjs'

document.addEventListener('click', () => {
	
	  const stream$ = new BehaviorSubject('First')

	stream$.subscribe(value =>  console.log('Value:', value))

	stream$.next(  'Hello')
	stream$.next(  'Rx')
	stream$.next(  'Js')

})
