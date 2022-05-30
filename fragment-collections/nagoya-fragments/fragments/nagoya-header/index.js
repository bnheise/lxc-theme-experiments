function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const notificationButton = document.querySelector("#notification-btn");
let notificationLinkUrl = new URL(notificationButton.href);
notificationLinkUrl.searchParams.append("p_p_auth", Liferay.authToken);
notificationButton.href = notificationLinkUrl.toString();

const secret = document.querySelector("#secret");
const badge = secret.querySelector(".badge");

badge.classList.add("notification-badge");

insertAfter(badge, notificationButton);

const contentElement = document.querySelector("#content");

const outputsize = () => {
  fragmentElement.children[0].style.width = `${contentElement.offsetWidth}px`;
};
outputsize();

new ResizeObserver(outputsize).observe(contentElement);
