<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar
	let:hidden
	let:toggle
	fluid={false}
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
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="https://medium.com/@frnn">Blog</NavLi>
		<NavLi href="mailto:frnncs+frnndev@gmail.com">
			<img src="/mail.svg" alt="mail icon" class="w-4 h-4 inline" />
			Mail
		</NavLi>
		<NavLi href="github.com/frNNcs">
			<img src="/gh.svg" alt="github icon" class="w-4 h-4 inline" />
			<span class="align-middle pl-1">Github</span>
		</NavLi>
		<NavLi href="/blogs/medium-post" class="italic text-sm">>First post</NavLi>
	</NavUl>
</Navbar>
