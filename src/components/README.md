# Life hooks

Mounting
--
constructor() => render() => componentDidMount()
// компонент "подключен" (DOM элементы уже на странице)

UPDATES
--
New props
=> render()  => componentDidUpdate() 

UNMOUNTING
--
componentWillUnmount()
// компонент будет удален (но DOM еще на странице)

ERROR
--
componentDidCatch() 
// когда в компоненте (или в его child-компонентах) произошла ошибка