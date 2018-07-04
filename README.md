# react-drag-slider

`npm i --save react-drag-slider`


## Props

- `width` (**number**) - width of slider
- `barElement` (**React.Element**) - bar content
- `barSize` (**{width, height}**) - bar sizes


## Usage

```javascript
<ReactDragSlider width={500} barElement={<img src="http://placehold.it/50x20" alt="bar"/>} barSize={{width: 50, height: 20}}>
  <img src="http://placehold.it/400x400" alt=""/>
  <img src="http://placehold.it/400x400" alt=""/>
  <img src="http://placehold.it/400x400" alt=""/>
  <img src="http://placehold.it/400x400" alt=""/>
  <img src="http://placehold.it/400x400" alt=""/>
  <img src="http://placehold.it/400x400" alt=""/>
</ReactDragSlider>
```
