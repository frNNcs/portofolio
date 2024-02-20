<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar
	class="
	bg-latte-base text-latte-text
	dark:bg-mocha-base dark:text-mocha-text"
>
	<NavBrand href="/">
		<span class="text-xl">
			<span class="px-0 mx-0 text-wrap">fr</span>
			<img src="/nn.svg" alt="nn logo" class="w-7 h-7 inline-block px-0 mx-0" />
			.
			<span class="font-thin">dev</span>
		</span>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi class="cursor-pointer" href="https://medium.com/@frnn">Blog</NavLi>
		<NavLi class="cursor-pointer" href="mailto:frnncs+frnndev@gmail.com">Contact</NavLi>
	</NavUl>
</Navbar>
