<style>
	.language-entry-long-text {
		  text-transform: capitalize;
  		flex-grow: 1;
			display: flex;
    	align-items: center;
    	justify-content: center;
	}
	
	.language-selector-body {
		display: flex;
		height: 40px;
	}
	
	span.language-entry-long-text {
		background-color: var(--gray-600);
		color: white;
	}
	
	a.language-entry-long-text {
  	color: black;
	}
</style>

<div class="language-selector-body">
	<#if entries?has_content>
		<#list entries as entry>
			<#if !entry.isDisabled()>
				<@liferay_aui["a"]
				cssClass="language-entry-long-text"
				href=entry.getURL()
				label=entry.getLongDisplayName()
				lang=entry.getW3cLanguageId()
				localizeLabel=false
				/>
			</#if>
		</#list>
	</#if>
</div>