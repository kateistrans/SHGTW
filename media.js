var media = {
    name: "media",
    version: "v1.0.0",
    requires: [],
    optionalRequires: [],
    optFuncs: {},
    description: "Adds support for images to mattex.",
    funcs: {
        image(e, i, a, t, m, r = this.u) {
            var s = document.createElement("img");
            s.src = m, s.id = "loadingimg", this.limg.appendChild(s), ctx.drawImage(s, e * r, i * r, a * r, t * r)
        }
    }
};