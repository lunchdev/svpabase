<script>
    import {user} from "$lib/session-store"
    import {supabase} from "$lib/supabase-client"
    import Auth from "./auth.svelte"
    import Profile from "./profile.svelte"

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session.user)
    })
</script>

<div class="container" style="padding: 50px 0 100px 0;">
    {#if $user}
        <Profile />
    {:else}
        <Auth />
    {/if}
</div>