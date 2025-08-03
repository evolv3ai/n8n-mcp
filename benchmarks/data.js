window.BENCHMARK_DATA = {
  "lastUpdate": 1754256554758,
  "repoUrl": "https://github.com/evolv3ai/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "035c4a349e848baa04b36f4bffdd47f7cad0325d",
          "message": "Merge pull request #121 from czlonkowski/fix/ci-skip-docs-only-changes\n\nfix: skip CI/CD workflows for documentation-only changes",
          "timestamp": "2025-08-02T22:57:58+02:00",
          "tree_id": "66a1b5b36de41b0594fb6e444df54baadb54bd06",
          "url": "https://github.com/evolv3ai/n8n-mcp/commit/035c4a349e848baa04b36f4bffdd47f7cad0325d"
        },
        "date": 1754256554404,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0186,
            "unit": "ms",
            "range": 0.2185,
            "extra": "53710 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1142,
            "unit": "ms",
            "range": 0.4647999999999999,
            "extra": "321 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "unit": "ms",
            "range": 0.24980000000000002,
            "extra": "210325 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0666,
            "unit": "ms",
            "range": 0.28459999999999996,
            "extra": "15019 ops/sec"
          }
        ]
      }
    ]
  }
}