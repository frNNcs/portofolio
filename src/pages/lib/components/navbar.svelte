<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar class="bg-ctp-base text-ctp-text light:bg-ctp-rosewater">
	<NavBrand href="/">
		<span
            class="self-center
                   whitespace-nowrap
                   text-xl
                   font-semibol
                   dark:text-ctp-rosewater"
        >
            fr<span class="font-bold">NN</span>.<span class="font-thin">dev</span>
        </span>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi class="text-ctp-text" href="/">Home</NavLi>
		<NavLi class="text-ctp-text" href="/about">About</NavLi>
		<NavLi class="text-ctp-text" href="/blog">Blog</NavLi>
		<NavLi class="text-ctp-text" href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
