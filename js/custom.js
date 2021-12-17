const setLabel = (lbl, val) => {
    const label = jQuery(`#slider-${lbl}-label`);
    label.text( '₹' + val );
    const slider = jQuery(`#slider-div .${lbl}-slider-handle`);
    const rect = slider[0].getBoundingClientRect();
    label.offset({
        top: rect.top - 30,
        left: rect.left
    });
}

const setLabels = (values) => {
    setLabel("min", values[0]);
    setLabel("max", values[1]);
}

$('#rangeSlider').slider().on('slide', function (ev) {
    setLabels(ev.value);
});
setLabels($('#rangeSlider').attr("data-value").split(","));