// Render with one text input
document.body.innerHTML = `
<div id="reference">
    <p>Reference content</p>
</div>
`;

let Dialog = result;
let dialog = new Dialog('Test Message #', () => {});
dialog.addInput('Gosho', 'gosho', 'text');

// Check before rendering
let body = $('body');
expect(body.text().trim()).to.equal('Reference content', "Content must only be added when render() is called");

dialog.render();
expect(body.text()).to.contains('Reference content', "Existing page content was altered");
let element = body.children().eq(1).find('.dialog');
expect(element.find('p').text()).to.contains('Test Message #', "Dialog message not displayed");
let buttons = element.find('button');
expect(buttons.eq(0).text()).to.equal('OK', "First button must be OK");
expect(buttons.eq(1).text()).to.equal('Cancel', "Second button must be Cancel");
let input = element.find('input');
expect(input.length).to.equal(1, "One input field expected");
expect(input.attr('name')).to.equal('gosho', "Input name attribute not set correctly");
expect(input.attr('type')).to.equal('text', "Input type attribute not set correctly");