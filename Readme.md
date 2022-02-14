## Install
```
npm install @r00t80y/resize-delay
```

## Files
```
./src/ResizeDelay.js - (Source Code)
./dist/ResizeDelay.js - (Babel)
./dist/ResizeDelay.polyfills.js - (Babel + Corejs)
```

## How to use?
```
<script src="/ResizeDelay.polyfills.js"></script>
<script>
window.onload = function() {
  (new window.ResizeDelay(1000))
    .add(function () {
      console.log('Resize Event whit delay 1s');
    });
}
</script>
```

### Using (Source Code)
Add callback
```
import ResizeDelay from '@r00t80y/resize-delay';

(new ResizeDelay).add(function () {
  console.log('Resize Event');
});
```

Remove callback
```
import ResizeDelay from '@r00t80y/resize-delay';

// Add
const resizeDelayRemove = (new ResizeDelay).add(function () {
  console.log('Resize Event');
});

// Remove
resizeDelayRemove();
```
Global delay
```
import ResizeDelay from '@r00t80y/resize-delay';

const delay = 777;
new ResizeDelay(delay);


// Add
const resizeDelayRemove = (new ResizeDelay).add(function () {
  console.log('Resize Event');
});

```

### Global Object
```
window.ResizeDelay._instance;
```
Calling a method
```
window.ResizeDelay._instance.resize();
```
