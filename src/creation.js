import {of, from, Observable, fromEvent} from 'rxjs'
import { scan, map } from 'rxjs/operators'

//const stream$ = of(1, 2, 3, 4)
//const stream$ = of('Hello', 'World')
//stream$.subscribe(value =>
//	console.log('Value:', value)
//)

//const stream$ = from([1, 2, 3, 4])
//	.pipe(
//		scan((acc, v) => acc.concat(v), [])
//	)
//stream$.subscribe(value =>
//	console.log('Value:', value)
//)

/*
const stream$ = new Observable(observer => {

	observer.next( 'First value')

	setTimeout(() => observer.next('After 1000 ms'), 1000)

	setTimeout(() => observer.complete('After 1500 ms'), 1500)

//	setTimeout(() => observer.error('Something went wrong'), 2000)

	setTimeout(() => observer.next('After 3000 ms'), 3000)

})


//stream$.subscribe(value => console.log('Value:', value))

//stream$.subscribe(
//	value => console.log('Value:', value),
//	err => console.log('Err:', err),
//	() => console.log('Complete!')
//
//)

stream$.subscribe({
		next(val){
			console.log(val)
		},
	error(err){
		console.log(err)
	},
	complete(){
		console.log('Complete')
	}
})*/


  fromEvent(document.querySelector('canvas'), 'mousemove')
	  .pipe(
	  	map(e => ({
			  x: e.offsetX,
			  y: e.offsetY,
			  ctx: e.target.getContext('2d')
		  }))
	  )
//	  .subscribe(event => console.log(event))
	  .subscribe(pos => pos.ctx.fillRect(pos.x, pos.y, 2, 2))
const clear$ = fromEvent(document.getElementById('clear'), 'click')
    clear$.subscribe(()=>{
    	    const canvas = document.querySelector('canvas')
	    canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height)
    })
