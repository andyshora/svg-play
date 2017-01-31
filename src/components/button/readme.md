## A Button Component

A Primary Button
```
<section className='qb-demo' style={{ height: 100, padding: 10 }}>
    <Button
        data={ { test: 123 } }
        type='primary'
        size='medium'
        label='Primary Button'
        onTapped={ data => { console.log('Primary Button Tapped', data) } } />
</section>
```

A secondary button
```
<section className='qb-demo' style={{ height: 100, padding: 10 }}>
    <Button
        data={ { test: 123 } }
        type='secondary'
        label='Secondary Button'
        onTapped={ data => { console.log('Secondary Button Tapped', data) } } />
</section>
```

Positive Theme, large size, hover in callback
```
<section className='qb-demo' style={{ height: 100, padding: 10 }}>
    <Button
        data={ { test: 123 } }
        type='positive'
        size='large'
        label='Positive theme - large'
        onHoverIn={ data => { console.log('onHoverIn', data) } } />
</section>
```

Negative theme, small size, hover out callback
```
<section className='qb-demo' style={{ height: 100, padding: 10 }}>
    <Button
        data={ { test: 123 } }
        type='negative'
        label='Negative theme - small'
        size='small'
        onHoverOut={ data => { console.log('onHoverOut', data) } } />
</section>
```

Disabled state
```
<section className='qb-demo' style={{ height: 100, padding: 10 }}>
    <Button disabled={ true } label='Disabled Button' />
</section>
```
