INSTANCE_ID=$(curl -s http://169.254.169.254/latest/meta-data/instance-id)

VOLUME_ID=$(aws ec2 describe-volumes \
  --query "Volumes[?Attachments[?InstanceId=='$INSTANCE_ID']].{ID:VolumeId}" \
  --output text)

aws ec2 modify-volume --volume-id $VOLUME_ID --size 32 
