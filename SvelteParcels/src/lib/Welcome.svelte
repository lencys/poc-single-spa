<script lang="ts">

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let user: string | undefined = undefined;
    // The new prop:
    export let onSignInOut: Function | undefined = undefined;
    // The handler:
    function signInOutHandler() {
        const detail = {
            user,
            signedIn: !!user
        };
        dispatch('signInOut', detail);
        (onSignInOut ?? (() => {}))(detail);
    }
</script>

<div class="welcome">
    <p>Welcome, <span class="text-primary">{user ? user : 'person or thing'}!</span></p>
    <button class="btn btn-secondary ms-auto" on:click={signInOutHandler}>{user ? 'Sign out' : 'Sign in'}</button>
</div>


<style>
    div.welcome {
        display: flex;
        flex-flow: row nowrap;
        gap: 1em;
        align-items: baseline;
        width: 100%;
    }
</style>