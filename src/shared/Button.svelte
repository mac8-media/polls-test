<script>
    export let type= 'primary';
    export let flat= false;
    export let inverse= false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse} on:click>
    <slot></slot>
</button>

<style>
    button{
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    }
    .primary{
        background: #2f95f5 ;
        color: white;
    }
    .secondary{
        background: #45c496;
        color: white;
    }
    .flat{
        box-shadow: none;
    }
    .primary.inverse{
        color: #2f95f5;
        background: white;
        border: 2px solid #2f95f5;
    }
    .secondary.inverse{
        color: #45c496;
        background: white;
        border: 2px solid #45c496;
    }
</style>