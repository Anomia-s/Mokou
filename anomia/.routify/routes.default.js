

export default {
  "meta": {},
  "id": "_default",
  "file": {
    "path": "src/routes",
    "dir": "src",
    "base": "routes",
    "ext": "",
    "name": "routes"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_auth_svelte",
      "name": "auth",
      "module": () => import('../src/routes/auth.svelte'),
      "file": {
        "path": "src/routes/auth.svelte",
        "dir": "src/routes",
        "base": "auth.svelte",
        "ext": ".svelte",
        "name": "auth"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "name": "index",
      "module": () => import('../src/routes/index.svelte'),
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_register_svelte",
      "name": "register",
      "module": () => import('../src/routes/register.svelte'),
      "file": {
        "path": "src/routes/register.svelte",
        "dir": "src/routes",
        "base": "register.svelte",
        "ext": ".svelte",
        "name": "register"
      },
      "children": []
    }
  ]
}