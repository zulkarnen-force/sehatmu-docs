# scp -p 10000  --dry-run  ./build/ vm006@103.19.182.25:/app/static/sehatmu-docs/
rsync -arvz -e 'ssh -p 10000' --progress --delete  ./build/ vm006@103.19.182.25:/app/static/sehatmu-docs/