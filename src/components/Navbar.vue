<template>
    <nav id="navbar">
        <RouterLink :to=item.to v-for="item in items" :key="item.label">
            <PrimeButton label="Secondary">{{ item.label }}</PrimeButton>
        </RouterLink>
    </nav>
</template>

<script>
    export default  {
        name: "PrimeMenubar",
        data() {
		return {
			items: [
                {label: 'Home', to: '/tabmenu'},
                {label: 'Calendar', to: '/tabmenu/calendar'},
                {label: 'Edit', to: '/tabmenu/edit'},
                {label: 'Documentation', to: '/tabmenu/documentation'},
                {label: 'Settings', to: '/tabmenu/settings'}
            ]
		}
	}
    }
</script>

<style scoped>
    #navbar{
        background-color: rgb(15, 206, 88);
        padding: 10px;
        border-radius: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
</style>