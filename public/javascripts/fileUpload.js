FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100,
    ImageResizeTargetWidth: 100,
    ImageResizeTargetHeight: 150
})

FilePond.parse(document.body)