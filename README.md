# mrcandie react preview

This is a simple react component to preview an uploaded image.

## Get started here

install library by running

`npm i mrcandie-react-preview`

import component into your project

`import Preview from 'mrcandie-react-preview'`

render Preview component in your project

```
export default function app(){
    return <Preview/>
}
```

Preview component accept some props:

### imgStyle

to add styling to the image

```
export default function app(){
    return <Preview imgStyle={{width: '100%'}} />
}
```

### outerStyle

to add styling to the container

```
export default function app(){
    return <Preview outerStyle={{width: '100%'}} imgStyle={{width: '100%'}} />
}
```

### height

to add fixed height to the image

```
export default function app(){
    return <Preview height='200px' outerStyle={{width: '100%'}} imgStyle={{width: '100%'}} />
}
```

### width

to add width to the image (default to 100%)

```
export default function app(){
    return <Preview height='200px' width='100px' outerStyle={{width: '100%'}} imgStyle={{width: '100%'}} />
}
```

### alt

to add an alternative text to the image (default to preview)

```
export default function app(){
    return <Preview height='200px' width='100px' alt='description here' outerStyle={{width: '100%'}} imgStyle={{width: '100%'}} />
}
```

### file

this props takes the uploaded image or file to be previewed (default to an empty string)

## NOTE

this props expects the value of e.target.files[0]

```
export default function app(){
    return <Preview height='200px' width='100px' alt='description here' outerStyle={{width: '100%'}} imgStyle={{width: '100%'}} />
}
```

### onClick

the onClick props takes a function that should be triggered when the preview component is clicked

```
export default function app(){
    return <Preview onClick={()=> alert('welcome to mrcandie-react-preview)} height='200px' width='100px' alt='description here' outerStyle={{width: '100%'}} imgStyle={{width: '100%'}} />
}
```

[see source code here ](https://github.com/candietechnologies/react-preview)
