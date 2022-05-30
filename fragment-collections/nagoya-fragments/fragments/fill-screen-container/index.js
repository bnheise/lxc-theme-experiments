function recurseAddFlex(fragmentElement) {
	fragmentElement?.classList.add("grow-flex");	
	if (!fragmentElement || fragmentElement.id === "content") {
		return;
	}
	recurseAddFlex(fragmentElement.parentElement);
}

recurseAddFlex(fragmentElement);